import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import products from "./data/Products.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Conectar ao banco
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGOOSEDB_URL);
    console.log("Banco conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error);
  }
}

connectDB();

//Enviar rotas para o Banco de dados
import databaseSeeder from "./databaseSeeder.js"

app.use('/api/seed', databaseSeeder)

// Rotas de teste
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product.id === req.params.id);
  res.json(product);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




//comerciallojao031_db_user
//7TcmowH5wlAcPBZe
//
//api product test route
// app.get("/api/products", (req,res) => { 
//   res.json(products)
// })

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((product)=>product.id === req.params.id)
//   res.json(product);
// })