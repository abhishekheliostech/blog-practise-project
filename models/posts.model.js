const mongoose = require('mongoose');
let PostModel = mongoose.model('PostsModel', {
    name: String,
    post: String,
    likes: Number,
    dateCreated: Number,
    comments: Array
})

module.exports = PostModel;