var express 						= require('express'),
		router 							= express.Router(),
		textPostsController = require('../controllers/textPosts'),
		commentController 	= require('../controllers/comments');

//TextPost Routes
router.get('/api/posts', textPostsController.getPosts);
router.get('/api/posts/:post_id', textPostsController.getPost);
router.post('/api/posts', textPostsController.postPosts);
router.put('/api/posts/:post_id', textPostsController.updatePost);
router.delete('/api/posts/:post_id', textPostsController.deletePost);

//Comment Routes
router.get('/api/posts/:post_id/comments', commentController.getComments);
router.get('/api/posts/:post_id/comments/:comment_id', commentController.getComment);
router.post('/api/posts/:post_id/comments', commentController.postComments);
router.put('/api/posts/:post_id/comments/:comment_id', commentController.updateComment);
router.delete('/api/posts/:post_id/comments/:comment_id', commentController.deleteComment);

module.exports = router;
