import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { dbConnection } from "./config/db.config.js";
import { authorRouter } from "./routes/author.routes.js";
import { bookRouter } from "./routes/book.routes.js";

const app = express();
dotenv.config();
dbConnection();

app.use(cors());
app.use(express.json());

app.use("/author", authorRouter);
app.use("/book", bookRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and running at port ${process.env.PORT}`);
});
