const User = require('../models/User');

// 3. Authenticated User Profile
exports.getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'სერვერის შეცდომა' });
    }
};

// 4. Other Users Page
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'მომხმარებელი ვერ მოიძებნა.' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'სერვერის შეცდომა' });
    }
};

// 8. Profile Editing
exports.updateProfile = async (req, res) => {
    try {
        const { bio, avatar, username } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { bio, avatar, username },
            { new: true, runValidators: true }
        ).select('-password');

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'სერვერის შეცდომა', error: error.message });
    }
};