import { Request, Response } from "express";

const { isValidObjectId } = require('mongoose');
const UserModel = require('../models/User');

const getAll = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find().select('-password').lean();

        return res.status(200).json(users);
    } catch (err: Error | any) {
        return res.status(500).json({ message: err?.message ?? 'Internal Server Error' });
    }
};

const getBydId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        if (!isValidObjectId(id)) {
            return res.status(400).json({
                message: 'Invalid id',
            });
        }

        const user = await UserModel.findById(id).select('-password').lean();

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        return res.status(200).json(user);
    } catch (err: Error | any) {
        return res.status(500).json({
            message: err?.message ?? 'Interal Server Error',
        });
    }
};

const getByUsername = async (req: Request, res: Response) => {
    try {
        const username = req.params.username;

        if (!username) {
            return res.status(400).json({
                message: 'Invalid username',
            });
        }

        const user = await UserModel.findOne({
            username,
        })
            .select('-password')
            .lean();

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        return res.status(200).json(user);
    } catch (err: Error | any) {
        return res.status(500).json({
            message: err?.message ?? 'Interal Server Error',
        });
    }
};

const usersController = {
    getAll,
    getBydId,
    getByUsername,
};

export default usersController;