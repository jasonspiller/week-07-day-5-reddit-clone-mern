// create schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	content: String,
	votes: { type: Number, default: 0 }
 });

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
