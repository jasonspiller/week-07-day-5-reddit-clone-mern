var db = require('../models');
var Comment = db.Comment;

// get all comments from a post
exports.getComments = function (req, res) {
	console.log('gets');
	// query the db
	db.TextPost.findById(req.params.post_id, function (err, post) {
		if (err) {
			console.log('DB error: ' + err);
			res.sendStatus(500);
		}
		res.json(post.comments);
	});
}

exports.postComments = function (req, res) {
	console.log('post');
	Comment.create(req.body, function(err, comment){
		if (err) res.end(err);
		else {
			TextPost.findById(req.params.post_id, function(err, post) {
				if (err) res.send(err);
				else {
					post.comments.push(comment);
					post.save();
					res.json(comment);
				}
			})
		}
	});
}

// get one comment from post
exports.getComment = function (req, res) {
	console.log('get');
	db.TextPost.findById(req.params.post_id, function (err, post) {
		if (err) {
			console.log('DB error: ' + err);
			res.sendStatus(500);
		}
		var comment =  post.comments.filter( function(comment) {
			return comment._id == req.params.comment_id;
		});

		res.json(comment[0]);
	});
}

exports.updateComment = function (req, res) {
	console.log('update');
	Comment.findByIdAndUpdate(req.params.comment_id,
    {$set: req.body}, function(err, comment){
    if (err) res.send(err);
    else res.json(comment);
  });
}

exports.deleteComment = function (req, res) {
	console.log('delete');
}
