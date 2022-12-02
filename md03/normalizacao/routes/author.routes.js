import express from "express";
import { AuthorModel } from "../model/author.model.js";

const authorRouter = express.Router();

authorRouter.post("/", async (req, res) => {
  try {
    const newAuthor = await AuthorModel.create(req.body);

    return res.status(201).json(newAuthor);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

authorRouter.get("/:authorId", async (req, res) => {
  try {
    const author = await AuthorModel.findOne({
      _id: req.params.authorId,
    }).populate("book");

    return res.status(200).json(author);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

authorRouter.get("/", async (req, res) => {
  const allAuthor = await AuthorModel.find({}).populate("book");

  return res.status(200).json(allAuthor);
});

export { authorRouter };
