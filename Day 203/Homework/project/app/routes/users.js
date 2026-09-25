const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');
const auth = require('../middleware/auth');

// 3. Authenticated User Profile
router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 8. Profile Editing
router.put('/me', auth, async (req, res) => {
    try {
        const { username, bio, avatar } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { username, bio, avatar },
            { new: true, runValidators: true }
        ).select('-password');

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Other Users Page (პროფილი + მომხმარებლის პოსტები)
router.get('/:id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'მომხმარებელი ვერ მოიძებნა' });

        const posts = await Post.find({ user: req.params.id }).sort({ createdAt: -1 });
        res.json({ user, posts });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;