import express from "express";
import { AuthorModel } from "../model/author.model.js";
import { BookModel } from "../model/book.model.js";

const bookRouter = express.Router();

bookRouter.post("/:authorId", async (req, res) => {
  try {
    const newBook = await BookModel.create({
      ...req.body,
      authors: [req.params.authorId],
    });

    await AuthorModel.findOneAndUpdate(
      { _id: req.params.authorId },
      { $push: { book: newBook._doc._id } },
      { runValidators: true }
    );

    return res.status(201).json(newBook);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

export { bookRouter };
