import { model, Schema } from "mongoose";

const beerSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  priceHistory: [{ type: Number }],
  beerType: {
    type: String,
    enum: [
      "Pilsen",
      "Pale ale",
      "IPA",
      "Strong ale",
      "Porter",
      "Lager",
      "Sagres",
      "Não informado",
    ],
    default: "Não informado",
  },
  harmo: { type: [{ type: String, enum: ["Carne", "Peixe", "Salada"] }] },
  createdAt: { type: Date, default: new Date(Date.now()) },
  updatedAt: [],
});

export const BeerModel = model("Beer", beerSchema);
