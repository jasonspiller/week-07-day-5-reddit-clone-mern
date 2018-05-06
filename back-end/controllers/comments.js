var db = require('../models');


// get all comments from a post
exports.getComments = function (req, res) {
	console.log('gets');
	// query the db
	db.TextPost.findById(req.params.post_id, function (err, post) {
		if(err) {
			console.log('Get Comments Error: ' + err);
			res.sendStatus(500);
		}
		res.json(post.comments);
	});
}


// get one comment from a post
exports.getComment = function (req, res) {
	console.log('get');
	db.TextPost.findById(req.params.post_id, function (err, post) {
		if(err) {
			console.log('Get Comment Error: ' + err);
			res.sendStatus(500);
		}

		var comment =  post.comments.filter( function(comment) {
			return comment._id == req.params.comment_id;
		});

		res.json(comment[0]);
	});
}


// create comment
exports.postComments = function (req, res) {
	console.log('create');
	console.log(req.body)

	db.TextPost.findById(req.params.post_id, function(err, post) {
		if(err) {
			console.log('Create Comment Error: ' + err);
			res.sendStatus(500);
		}

		post.comments.unshift(req.body);
		post.save( function(err, updatedDocument) {
			if(err) {
				console.log('Create Comment Save Error: ' + err);
				res.sendStatus(500);
			}
			res.json(updatedDocument);
		});
	})
}


// update comment
exports.updateComment = function (req, res) {
	console.log('update');

	db.TextPost.updateOne({_id: req.params.post_id, 'comments._id': req.params.comment_id}, { $set: { 'comments.$.content': req.body.content } }, function(err, post) {
    if(err) {
			console.log("Update Comment Error: " + err);
			res.sendStatus(500);
		}

		// get document after update
		db.TextPost.findById(req.params.post_id, function(err, post) {
			if(err) {
				console.log('Get Error: ' + err);
				res.sendStatus(500);
			}
			res.json(post);
		});
  });
}


// delete comment
exports.deleteComment = function (req, res) {
	console.log('delete');
	db.TextPost.findByIdAndUpdate(req.params.post_id, { $pull: {comments: {_id: req.params.comment_id } } }, function (err, post) {
		if(err){
			console.log("Delete Comment Error: " + err);
			res.sendStatus(500);
		}
		
		// get document after update
		db.TextPost.findById(req.params.post_id, function(err, post) {
			if(err) {
				console.log('Get Error: ' + err);
				res.sendStatus(500);
			}
			res.json(post);
		});
	})
}
