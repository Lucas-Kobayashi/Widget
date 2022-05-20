// Tipos de comandos HTTP mais utilizados em uma api restfull.

// GET = Buscar informações.
// POST = Cadastrar informações.
// PUT = Atualizar informações de uma entidade.
// PATCH = Atualizar uma informação única de uma entidade.
// DELETE = Apagar uma informação.

import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("Tá rodando o sever");
});
