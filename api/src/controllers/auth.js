const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const register = async (req, res) => {
    try {
        const { username, email, password, birthday } = req.body;

        const user = await User.findOne({
            email,
        });

        if (user) {
            return res.status(400).json({
                message: 'User already exists.',
            });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            birthday,
            postCount: 0,
            biography: '',
        });

        return res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
    }
};

const authController = {
    register,
};

module.exports = authController;
