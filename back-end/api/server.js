// API significa Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - Create, Read, Update, Delete
// Endpoint é uma rota que pode ser acessada dentro de uma API
// Middleware

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar como os endpoints '/artist' e  '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`servidor está escutando na porta:${PORT}`);
});
