const express = require("express");
const {
  createAuthor,
  getAllAuthors,
  getOneAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/author.controller");

const router = express.Router();

// prettier-ignore
router
  .route("/")
  .get(getAllAuthors)
  .post(createAuthor);

// prettier-ignore
router  
  .route("/:id")
  .get(getOneAuthor)
  .put(updateAuthor)
  .delete(deleteAuthor);

module.exports = router;
