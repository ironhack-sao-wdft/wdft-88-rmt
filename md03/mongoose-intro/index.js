import * as dotenv from "dotenv";
import express from "express";
import { dbConnect } from "./config/db.config.js";

import { beerRouter } from "./routes/beer.routes.js";

dotenv.config();
dbConnect();

const app = express();

app.use(express.json());

app.use("/beer", beerRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server rodando na porta ${process.env.PORT}`);
});
