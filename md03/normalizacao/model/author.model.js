import { model, Schema, Types } from "mongoose";

const authorSchema = new Schema({
  name: { type: String, required: true },
  book: [{ type: Types.ObjectId, ref: "Book" }],
  age: { type: Number },
});

export const AuthorModel = model("Author", authorSchema);
