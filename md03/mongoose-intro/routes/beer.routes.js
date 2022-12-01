import express from "express";
import { BeerModel } from "../models/beer.model.js";

const beerRouter = express.Router();

beerRouter.post("/", async (req, res) => {
  try {
    const beer = await BeerModel.create(req.body);

    return res.status(201).json(beer);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

beerRouter.get("/", async (req, res) => {
  try {
    const allBeers = await BeerModel.find({});

    return res.status(200).json(allBeers);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

beerRouter.get("/:id", async (req, res) => {
  try {
    const beer = await BeerModel.findOne({ _id: req.params.id });

    return res.status(200).json(beer);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// Exemplo preço com query params

beerRouter.patch("/:id", async (req, res) => {
  try {
    delete req.body._id;
    const oldBeer = await BeerModel.findOne({ _id: req.params.id });

    delete oldBeer._doc.updatedAt;

    const newBeer = await BeerModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body, $push: { updatedAt: oldBeer } },
      { new: true, runValidators: true }
    );

    return res.status(200).json(newBeer);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

beerRouter.delete("/:id", async (req, res) => {
  try {
    const deleted = await BeerModel.deleteOne({ _id: req.params.id });

    return res.status(200).json(deleted);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

export { beerRouter };
