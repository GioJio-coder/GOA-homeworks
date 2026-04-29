const mongoose = require(`mongoose`);

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
        default: `white`
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;