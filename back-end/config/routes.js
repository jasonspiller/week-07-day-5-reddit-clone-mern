var express 						= require('express'),
		router 							= express.Router(),
		textPostsController = require('../controllers/textPosts'),
		commentController 	= require('../controllers/comments');

//TextPost Routes
router.get('/api/posts', textPostsController.getPosts);
router.post('/api/posts', textPostsController.postPosts);
router.get('/api/posts/:post_id', textPostsController.getPost);
router.put('/api/posts/:post_id', textPostsController.updatePost);
router.delete('/api/posts/:post_id', textPostsController.deletePost);

//Comment Routes
router.post('/api/posts/:post_id/comments', commentController.postComment);
router.get('/api/posts/:post_id/comments/:comment_id', commentController.getComment);
router.put('/api/posts/:post_id/comments/:comment_id', commentController.updateComment);
router.delete('/api/posts/:post_id/comments/:comment_id', commentController.deleteComment);

module.exports = router;
