const express = require("express");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

const GetAllPosts = async (req, res) => {
  try {
    const Posts = await Post.find().lean();
    return res.status(200).json(Posts);
  } catch (err) {
    return res.status(500).json({
      message: "Oops, Something went wrong",
    });
  }
};

const GetAllComments = async (req, res) => {
  try {
    const Comments = await Comment.find().lean();
    return res.status(200).json(Comments);
  } catch (err) {
    return res.status(500).json({
      message: "No Comments",
    });
  }
};

const GetPostById = async (req, res) => {
  try {
  } catch (err) {}
};

const postCommentController = {
  GetAllPosts,
  GetAllComments,
};

module.exports = postCommentController;
