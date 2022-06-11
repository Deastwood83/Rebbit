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

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;

        if (!isValidObjectId(id)) {
            return res.status(400).json({
                message: 'Invalid id',
            });
        }

        const user = await UserModel.findById(id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        if (user._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: 'You are not allowed to update this user',
            });
        }

        const { name, email, password } = req.body;

        if (name) {
            user.name = name;
        }

        if (email) {
            user.email = email;
        }

        if (password) {
            user.password = password;
        }

        await user.save();

        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const usersController = {
    getAll,
    getBydId,
    updateUser,
};

module.exports = usersController;
