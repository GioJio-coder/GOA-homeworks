const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');

// 5. Show All Posts
router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('user', 'username avatar')
            .sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 6. Adding Post
router.post('/', auth, async (req, res) => {
    try {
        const { content, image } = req.body;
        const newPost = new Post({
            user: req.user.id,
            content,
            image
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 7. Removing Post (მხოლოდ საკუთარის)
router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'პოსტი ვერ მოიძებნა' });

        // შემოწმება: ეკუთვნის თუ არა პოსტი ავტორიზებულ მომხმარებელს
        if (post.user.toString() !== req.user.id) {
            return res.status(403).json({ message: 'თქვენ არ გაქვთ ამ პოსტის წაშლის უფლება' });
        }

        await post.deleteOne();
        // წაიშალოს მიბმული კომენტარებიც
        await Comment.deleteMany({ post: req.params.id });

        res.json({ message: 'პოსტი წარმატებით წაიშალა' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 9. Liking Post (Toggle - დალაიქება / მოხსნა)
router.post('/:id/like', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'პოსტი ვერ მოიძებნა' });

        const index = post.likes.indexOf(req.user.id);
        if (index === -1) {
            post.likes.push(req.user.id); // დალაიქება
        } else {
            post.likes.splice(index, 1); // ლაიქის მოხსნა
        }

        await post.save();
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 10. Commenting Post
router.post('/:id/comments', auth, async (req, res) => {
    try {
        const { text } = req.body;
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'პოსტი ვერ მოიძებნა' });

        const comment = new Comment({
            user: req.user.id,
            post: req.params.id,
            text
        });

        await comment.save();
        res.status(201).json(comment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// პოსტის კომენტარების წამოღება
router.get('/:id/comments', auth, async (req, res) => {
    try {
        const comments = await Comment.find({ post: req.params.id })
            .populate('user', 'username avatar')
            .sort({ createdAt: -1 });
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;