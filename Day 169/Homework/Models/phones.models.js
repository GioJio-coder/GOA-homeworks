const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');    

const phoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        default: 'white'
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});

phoneSchema.methods.signToken = function() {
    return jwt.sign(
        { id: this._id }, 
        process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_EXPIRES_IN }
    );
};

phoneSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;