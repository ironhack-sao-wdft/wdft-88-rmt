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

export { beerRouter };
