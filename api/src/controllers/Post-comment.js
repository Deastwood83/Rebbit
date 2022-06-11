const express = require("express");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */

const GetAllPosts = async (req, res) => {
  try {
    const Posts = await Post.find().populate("owner").lean();
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
    const Id = req.params.id;
    const post = await Post.findById(Id).populate("owner").lean();
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }
    return res.json(post);
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const GetCommentById = async (req, res) => {
  try {
    const Id = req.params.id;
    const comment = await Comment.findById(Id);
    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }
    return res.json(comment);
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const CreatePost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Please provide title and content",
      });
    }

    const user = req.user;

    const newPost = await Post.create({
      title,
      content,
      owner: user._id,
    });

    return res.json(newPost);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const CreateComment = async (req, res) => {
  try {
    const { content } = req.body;

    const newComment = await Comment.create({
      content,
    });

    return res.json(newComment);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const DeleteComment = async (req, res) => {
  try {
    const Id = req.params.id;
    const comment = await Comment.findById(Id);
    await comment.remove();
    return res.json({
      message: "Comment deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const DeletePost = async (req, res) => {
  try {
    const Id = req.params.id;
    const post = await Post.findById(Id);
    await post.remove();
    return res.json({
      message: "Post deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const postCommentController = {
  GetAllPosts,
  GetAllComments,
  GetPostById,
  GetCommentById,
  CreatePost,
  CreateComment,
  DeleteComment,
  DeletePost,
};

module.exports = postCommentController;
