import { Schema, model, Types } from "mongoose";

interface Post {
    title: string;
    content: string;
    owner: Types.ObjectId;
}

const postSchema = new Schema<Post>({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        min: 30,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const PostModel = model<Post>('Post', postSchema);

export default PostModel;