const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
    },
    profileDescription: {
        type: String,
    },
    birthday: {
        type: Date,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;