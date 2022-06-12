const { isValidObjectId } = require('mongoose');
const UserModel = require('../models/User');

const getAll = async (req, res) => {
    try {
        const users = await UserModel.find().select('-password').lean();

        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

const getBydId = async (req, res) => {
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
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const getByUsername = async (req, res) => {
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
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const usersController = {
    getAll,
    getBydId,
    getByUsername,
};

module.exports = usersController;
