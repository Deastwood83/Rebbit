import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../models/User';

const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                message: 'Missing required fields.',
            });
        }

        const user = await UserModel.findOne({
            email,
        });

        if (user) {
            return res.status(400).json({
                message: 'User already exists.',
            });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword,
            biography: '',
        });

        return req.login({
            _id: newUser.id,
            username: newUser.username,
            email: newUser.email,
        }, (err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong.',
                });
            }

            return res.status(201).json(newUser);
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong.',
        });
    }
};


const signout = async (req: Request, res: Response) => {
    try {
        req.logout((err) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error signing out.',
                });
            }

            return res.status(200).json({
                message: 'User signed out.',
            });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong.',
        });
    }
};

const updateMe = async (req: Request, res: Response) => {
    try {
        const { password, biography } = req.body;

        const user = await UserModel.findById(req?.user?._id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found.',
            });
        }

        if (password) {
            const salt = await bcrypt.genSalt(10);

            const hashedPassword = await bcrypt.hash(password, salt);

            user.password = hashedPassword;
        }

        if (biography) {
            user.biography = biography;
        }

        await user.save();

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong.',
        });
    }
};

const authController = {
    register,
    signout,
    updateMe,
};

export default authController;