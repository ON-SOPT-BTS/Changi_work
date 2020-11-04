const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const util = require('../../modules/utils');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
let usersDB = require('../../modules/users');

router.post('/signup', (req, res) => {
    try {
        const { id, password } = req.body;
        if (!id || !password) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }
        else {
            const user_id = usersDB.map((user) => {
                return user.id;
            })
            if (user_id.includes(id)) {
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_ID));
            } else {
                const salt = new Promise((resolve, reject) => {
                    crypto.randomBytes(64, (err, buf) => {
                        resolve(buf.toString('base64'));
                    });
                });
                const hash_password = new Promise((resolve, reject) => {
                    salt.then((result) => {
                        crypto.randomBytes(64, (err, buf) => {
                            crypto.pbkdf2(password, result, 100000, 64, 'sha512', (err, key) => {
                                resolve(key.toString('base64'));
                            });
                        });
                    })
                })
                salt.then((salt) => {
                    hash_password.then((password) => {
                        usersDB.push({
                            id, password, salt
                        })

                    })
                })
                return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_UP_SUCCESS, id));
            }
        }
    } catch {
        (err) => {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(utl.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_UP_FAIL,err));
        }
    }
    //1. req.body에서 데이터 가져오기
    //2. request data 확인하기, id 또는 password data가 없다면 NullValue 반환
    //3. 존재하는 아이디인지 확인하기. 이미 존재하는 아이디면 ALREADY ID 반환
    //4. salt 생성
    //5. 2차 세미나때 배웠던 pbkdf2 방식으로 (비밀번호 + salt) 해싱하여 => 암호화된 password 를 만들기!
    //6. usersDB에 id, 암호화된 password, salt 저장!
    //7. status: 200 message: SING_UP_SUCCESS, data: id만 반환! (비밀번호, salt 반환 금지!!)
})

router.post('/signin', (req, res) => {
    try{
        const { id, password } = req.body;
        if (!id || !password) {
            console.log("필요값 누락");
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }else{
            const user_id = usersDB.map((user) => {
                return user.id;
            })
            if(!user_id.includes(id)){
                return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
            }else{
                const match_user = usersDB.filter(item => {
                    return item.id === id; 
                });
                const salt = match_user[0].salt;
                const compare_password = new Promise((resolve, reject) => {
                    crypto.randomBytes(64, (err, buf) => {
                        crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) => {
                            resolve(key.toString('base64'));
                        });
                    })
                })
                compare_password.then(compare_pw=>{
                    if(match_user[0].password===compare_pw){
                        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_IN_SUCCESS,id));
                    }else{
                        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
                    }
                })
            }
        }
    }catch{
        (err) => {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(utl.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_IN_FAIL,err));
        }
    }
    //1. req.body에서 데이터 가져오기
    //2. request data 확인하기, id 또는 password data가 없다면 NullValue 반환
    //3. 존재하는 아이디인지 확인하기. 존재하지 않는 아이디면 NO USER 반환
    //4. 비밀번호 확인하기 - 로그인할 id의 salt를 DB에서 가져와서  사용자가 request로 보낸 password와
    //   암호화를 한후 디비에 저장되어있는 password와 일치하면 true일치하지 않으면 Miss Match password 반환
    //5. status: 200 ,message: SIGNIN SUCCESS, data: id 반환 (비밀번호, salt 반환 금지!!)
})
router.get('/', (req, res) => {
    const users = usersDB;
    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_READ_ALL_SUCCESS, users));
    // 1.모든 유저정보 조회 (id, password, salt)!
})

module.exports = router;