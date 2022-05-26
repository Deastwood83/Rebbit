const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    birthday: Date,
    biography: String,
    postCount: {
        type: Number,
        default: 0,
        min: 0,
    },
});

const UserModel = model('User', userSchema);

module.exports = UserModel;
