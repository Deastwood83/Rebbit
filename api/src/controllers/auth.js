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

        return req.login(newUser, (err) => {
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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const signout = async (req, res) => {
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

const authController = {
    register,
    signout,
};

module.exports = authController;
