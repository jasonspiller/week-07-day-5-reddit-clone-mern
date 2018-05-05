var db = require('../models');
var TextPost = db.TextPost;

exports.getPosts = function(req, res) {
  TextPost.find({}, function(err, textPosts) {
    if (err) res.send(err);
    else res.json(textPosts);
  });
}

exports.postPosts = function(req, res) {
	console.log('posts');
}

exports.getPost = function(req, res) {
	console.log('get');
}

exports.updatePost = function(req, res) {
	console.log('update');
}

exports.deletePost = function(req, res) {
	console.log('delete');
}
