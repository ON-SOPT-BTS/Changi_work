const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const upload = require('../modules/multer');
const { User, Post, Like } = require('../models');

module.exports = {
    createPost: async (req,res)=>{
        const { userId, title , contents } = req.body;
        const image = req.file.location;
        try{
            const post = await Post.create({ UserId : userId, title, contents, postImageUrl : image});
            return res.status(sc.OK).send(ut.success(sc.OK,rm.CREATE_POST_SUCCESS,post));
        }catch(err){
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR,rm.CREATE_POST_FAIL));
        }
    },
    readAllPosts: async (req,res)=>{
        try{
            const posts = await Post.findAll({
                attributes: ['title','contents','postImageUrl'],
                include: [{
                    model: User,
                    attributes: ['id','userName','email']
                },{
                    model: User,
                    as: 'Liker',
                    attributes: { exclude: ['password','salt','id','email']}
                }]
            });
            console.log(JSON.stringify(posts,null,2));
            return res.status(sc.OK).send(ut.success(sc.OK,rm.READ_POST_ALL_SUCCESS,posts));
        }catch(err){
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.fail(sc.INTERNAL_SERVER_ERROR,rm.READ_POST_ALL_FAIL)));
        }
    },
    createLike: async (req,res)=>{
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try{
            const like = await Like.create({PostId,UserId});
            return res.status(sc.OK).send(ut.success(sc.OK,rm.CREATE_LIKE_SUCCESS,like));
        }catch(err){
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.success(sc.INTERNAL_SERVER_ERROR,rm.CREATE_LIKE_FAIL));
        }
    },
    deleteLike: async (req,res)=>{
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try{
            const like = await Like.destroy({
                where:{
                    PostId,UserId
                }
            });
            if(!like){
                return res.status(sc.BAD_REQUEST).send(ut.fail(sc.BAD_REQUEST,rm.DELETE_LIKE_FAIL));
            }
            return res.status(sc.OK).send(ut.success(sc.OK,rm.DELETE_LIKE_SUCCESS));
        }catch(err){
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR,rm.DELETE_LIKE_FAIL));
        }
    }
}