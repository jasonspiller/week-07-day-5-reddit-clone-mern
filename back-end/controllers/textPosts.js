var db = require('../models');


// return all posts
exports.getPosts = function(req, res) {
	console.log('gets');
  db.TextPost.find({}, function(err, posts) {
		if(err) {
			console.log('Gets Posts Error: ' + err);
			res.sendStatus(500);
		}
		res.json(posts);
  });
}


// get one post
exports.getPost = function(req, res) {
	console.log('get');
	db.TextPost.findById(req.params.post_id, function(err, post) {
		if(err) {
			console.log('Get Post Error: ' + err);
			res.sendStatus(500);
		}
		res.json(post);
  });
}


// create post
exports.postPosts = function(req, res) {
	console.log('create');

	db.TextPost.create(req.body, function(err, post) {
		if(err) {
			console.log('Create Post Error: ' + err);
			res.sendStatus(500);
		}
		res.json(post);
	});
}


// update post
exports.updatePost = function(req, res) {
	console.log('update');
	console.log(req.body);

	db.TextPost.findByIdAndUpdate(req.params.post_id, {$set: req.body}, function(err, post) {
		if(err) {
			console.log('Update Post Error: ' + err);
			res.sendStatus(500);
		}
		
		// get document after updates
		db.TextPost.findById(req.params.post_id, function(err, post) {
			if(err) {
				console.log('Get Post Error: ' + err);
				res.sendStatus(500);
			}
			res.json(post);
		});
	});
}


// delete post
exports.deletePost = function(req, res) {
	console.log('delete');
	db.TextPost.findByIdAndRemove(req.params.post_id, function(err, post) {
		if(err) {
			console.log('Delete Post Error: ' + err);
			res.sendStatus(500);
		}
		res.send("Post Deleted");
  });
}
