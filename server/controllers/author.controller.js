const Author = require("../models/author.model");

async function createAuthor(req, res) {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getAllAuthors(req, res) {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getOneAuthor(req, res) {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);
    res.status(200).json(author);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateAuthor(req, res) {
  const { id } = req.params;
  try {
    const author = await Author.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(author);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteAuthor(req, res) {
  const { id } = req.params;
  try {
    const author = await Author.findByIdAndDelete(id);
    res.status(200).json(author);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  createAuthor,
  getAllAuthors,
  getOneAuthor,
  updateAuthor,
  deleteAuthor,
};
