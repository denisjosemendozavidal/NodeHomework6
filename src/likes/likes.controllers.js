const Likes = require('../models/likes.models')
const uuid = require('uuid')

const findAllLikesFromPost = async () => {
    const data = await Likes.findAll({
        where : {
            postId : postId
        }
    })
    return data
}

const createLike = async (obj) => {

    const validate = await Likes.findOne({
        where: {
            userId: obj.userId,
            postId: obj.postId
        }
    })

    if (validate) {
        return null
    } 

    const data = await Likes.create({
        id: uuid.v4(),
        userId: obj.userId,
        postId: obj.postId
    })
    return data
}


module.exports = {
    findAllLikesFromPost,
    createLike
}
