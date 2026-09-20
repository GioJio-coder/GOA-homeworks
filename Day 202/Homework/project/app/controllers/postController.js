const Post = require('../models/Post');

// 5. Show All Posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('author', 'username avatar')
            .sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'სერვერის შეცდომა' });
    }
};

// 6. Adding Post
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({
            title,
            content,
            author: req.user.id
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'სერვერის შეცდომა' });
    }
};

// 7. Removing Post (Only Yours)
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'პოსტი ვერ მოიძებნა.' });

        if (post.author.toString() !== req.user.id) {
            return res.status(403).json({ message: 'უფლება არ გაქვთ წაშალოთ სხვისი პოსტი.' });
        }

        await post.deleteOne();
        res.json({ message: 'პოსტი წარმატებით წაიშალა.' });
    } catch (error) {
        res.status(500).json({ message: 'სერვერის შეცდომა' });
    }
};

// 9. Liking / Unliking Post
exports.toggleLikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'პოსტი ვერ მოიძებნა.' });

        const likeIndex = post.likes.indexOf(req.user.id);
        if (likeIndex === -1) {
            post.likes.push(req.user.id); // მოწონება
        } else {
            post.likes.splice(likeIndex, 1); // მოწონების გაუქმება
        }

        await post.save();
        res.json({ likesCount: post.likes.length, likes: post.likes });
    } catch (error) {
        res.status(500).json({ message: 'სერვერის შეცდომა' });
    }
};