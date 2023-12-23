const mongoose = require("mongoose");
require("dotenv").config(); // Cargar variables de entorno desde el archivo .env

const connectDB = async () => {
  try {
    const DB_URI = process.env.DB_URI; // Usar la variable de entorno

    await mongoose.set('strictQuery', false);
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB conectado');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;
