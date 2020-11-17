const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const { User, Post, Like } = require('../models');

module.exports = {
    createPost: async (req,res)=>{
        const { userId, title , contents } = req.body;
        try{
            const post = await Post.create({ UserId : userId, title, contents});
            return res.status(sc.OK).send(ut.success(sc.OK,rm.CREATE_POST_SUCCESS,post));
        }catch(err){
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR,rm.CREATE_POST_FAIL));
        }
    },
    readAllPosts: async (req,res)=>{

    },
    createLike: async (req,res)=>{

    }
}