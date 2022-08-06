import { Schema, model } from "mongoose";

interface User {
    username: string;
    password: string;
    email: string;
    biography: string;
}

const userSchema = new Schema<User>(
    {
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
        biography: String,
    },
    {
        timestamps: true,
    }
);

const UserModel = model<User>('User', userSchema);

export default UserModel;
