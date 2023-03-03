const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter author name"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
