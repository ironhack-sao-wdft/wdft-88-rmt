import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Conectado ao banco de dados: ${dbConnection.connection.name}`);
  } catch (err) {
    console.log(err);
  }
}
