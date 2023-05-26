const mongoose = require('mongoose');

const publicacionStartup = new mongoose.Schema({
  descripcionPublicacion: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  imagen: { type: String }
});

const Startups = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: false },
  descripcionCorta: { type: String, required: true },
  descripcionGeneral: { type: String, required: true },
  categoria: { type: String, required: true },
  busquedas: { type: [String], default: [] },
  publicaciones: { type: [publicacionStartup], default: [] }
});

module.exports =  mongoose.model('Startups', Startups);
