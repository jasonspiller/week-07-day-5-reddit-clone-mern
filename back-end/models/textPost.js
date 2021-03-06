// create schema
var mongoose 			= require('mongoose'),
		Schema 				= mongoose.Schema,
		CommentModel	= require("./comment");

var TextPostSchema = new Schema({
	title: String,
	content: String,
	thumbnail_image_url: String,
	votes: { type: Number, default: 0 },
	comments: [CommentModel.schema]
 });

var TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;
