var db = require('../models');
var Comment = db.Comment;

exports.postComment = function (req, res) {
	console.log('post');
}

exports.getComment = function (req, res) {
	console.log('get');
}

exports.updateComment = function (req, res) {
	console.log('update');
}

exports.deleteComment = function (req, res) {
	console.log('delete');
}
