import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(express.json());

//EXEMPLOS
// app.get("/", (req, res) => {
//   return res.status(200).json("API RODANDO!");
// });

// app.post("/teste-post", (req, res) => {
//   console.log(req.body);
// });

let data = [];

app.post("/", (req, res) => {
  data.push({ ...req.body, id: uuidv4() });

  return res.status(201).json(data[data.length - 1]);
});

app.get("/", (req, res) => {
  return res.status(200).json(data);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;

  const item = data.filter((currentElement) => {
    return currentElement.id === id;
  });

  return res.status(200).json(item[0]);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  const cleanArray = data.filter((currentElement) => {
    return currentElement.id !== id;
  });

  data = cleanArray;

  return res.status(204).json("Elemento removido");
});

app.listen(4000, () => {
  console.log("Server rodando na porta 4000");
});
