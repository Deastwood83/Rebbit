import express, { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import PostModel from '../models/Post';

const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await PostModel.find().populate('owner').lean();
        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json({
            message: 'Oops, Something went wrong',
        });
    }
};


const getPost = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const post = await PostModel.findById(id).populate('owner').lean();
        if (!post) {
            return res.status(404).json({
                message: 'Post not found',
            });
        }
        return res.json(post);
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong',
        });
    }
};


const createPost = async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: 'Please provide title and content',
            });
        }

        const user = req.user;

        const newPost = await PostModel.create({
            title,
            content,
            owner: user?._id,
        });

        return res.json(newPost);
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong',
        });
    }
};


const deletePost = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const post = await PostModel.findById(id);

        await post?.remove();

        return res.json({
            message: 'Post deleted',
        });
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong',
        });
    }
};

const updatePost = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        if (!isValidObjectId(id)) {
            return res.status(400).json({
                message: 'Invalid id',
            });
        }

        const post = await PostModel.findById(id).populate('owner');

        if (!post) {
            return res.status(404).json({
                message: 'Post not found',
            });
        }

        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                message: 'Please provide title and content',
            });
        }

        post.title = title;
        post.content = content;

        await post.save();

        return res.status(200).json(post);
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong',
        });
    }
};

const postsController = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};

export default postsController;
