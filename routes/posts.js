const express = require("express");
const token = require("../middleware/verification");
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");


const postsRouter = express.Router();

postsRouter.use(token);

postsRouter.route("/").get(getPosts).post(createPost);
postsRouter.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = postsRouter;
