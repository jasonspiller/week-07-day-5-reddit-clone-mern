// create schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	content: String,
	votes: Number
 });

var Comment = mongoose.model('Comment', CommentSchemma);

module.exports = Comment;
