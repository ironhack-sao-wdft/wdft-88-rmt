import { model, Schema, Types } from "mongoose";

const bookSchema = new Schema({
  name: { type: String, required: true },
  authors: [{ type: Types.ObjectId, ref: "Author" }],
});

export const BookModel = model("Book", bookSchema);
