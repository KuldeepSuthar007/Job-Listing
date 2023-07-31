const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number
    },
    checkbox: {
        type: Boolean
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);