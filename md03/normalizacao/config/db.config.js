import mongoose from "mongoose";

export async function dbConnection() {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    console.log(db.connection.name);
  } catch (err) {
    console.log(err);
  }
}
