var db = require('../models');


// return all posts
exports.getPosts = function(req, res) {
	console.log('gets');
  db.TextPost.find({}, function(err, posts) {
		if (err) {
			console.log('Gets Error: ' + err);
			res.sendStatus(500);
		}
		res.json(posts);
  });
}


// get one post
exports.getPost = function(req, res) {
	console.log('get');
	db.TextPost.findById(req.params.post_id, function(err, post) {
		if (err) {
			console.log('Get Error: ' + err);
			res.sendStatus(500);
		}
		res.json(post);
  });
}


// create post
exports.postPosts = function(req, res) {
	console.log('posts');
}


// update post
exports.updatePost = function(req, res) {
	console.log('update');
}


// delete post
exports.deletePost = function(req, res) {
	console.log('delete');
}
