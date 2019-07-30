const Posts = require('../models/posts.model')

exports.savePosts = (req, res) => {

    let post = new Posts({
        name: req.body.name,
        post: req.body.post,
        likes: req.body.likes,
        dateCreated: new Date().getTime(),
        comments: req.body.comments
    });

    post.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Post created successfully');
    })
}

exports.getPosts = (req, res) => {
    Posts.find({}, (err, posts) => {
        if (err) {
            return next(err)
        }
        res.send(posts)
    })
}

exports.updatePosts = (req, res) => {
    Posts.findByIdAndUpdate(req.params.id, {$set: req.body},
        function (err, posts) {
            if(err) return next(err);
            res.send('Product updated');

        });
}

exports.deletePosts = function(req, res) {
    Posts.findByIdAndDelete(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully');
    })
}