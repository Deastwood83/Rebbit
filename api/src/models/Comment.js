const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
        max: 255,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
});

const CommentModel = model('Comment', commentSchema);

module.exports = CommentModel;
