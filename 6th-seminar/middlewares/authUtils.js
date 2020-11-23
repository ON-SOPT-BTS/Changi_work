const jwt = require('../modules/jwt');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const ut = require('../modules/util');
const { User } = require('../models');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;
const ACCESS_TOKEN_EXPIRED = -4;
//12/9 시험
const authUtil = {
    checkToken: async (req, res, next) => {
        var token = req.headers.jwt;
        var refreshToken = req.headers.refreshtoken;
        if (!token) {
            return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST, rm.EMPTY_TOKEN));
        }
        const user = await jwt.verify(token);

        if (user === ACCESS_TOKEN_EXPIRED) {
            const refresh = await jwt.refresh(refreshToken);
            if (refresh !== TOKEN_EXPIRED) {
                const user = await jwt.verify(refresh);
                req.decoded = user;
                return next();
            }

            // return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.EXPIRED_TOKEN));
        }
        if (user === TOKEN_EXPIRED) {
            return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.EXPIRED_TOKEN));
        }
        if (user === TOKEN_INVALID) {
            return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.INVALID_TOKEN));
        }
        if (user.id === undefined) {
            return res.status(sc.UNAUTHORIZED).send(ut.fail(sc.UNAUTHORIZED, rm.INVALID_TOKEN));
        }
        req.decoded = user;
        next();
    }
}
module.exports = authUtil;