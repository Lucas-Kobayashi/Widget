// Tipos de comandos HTTP mais utilizados em uma api restfull.

// GET = Buscar informações.
// POST = Cadastrar informações.
// PUT = Atualizar informações de uma entidade.
// PATCH = Atualizar uma informação única de uma entidade.
// DELETE = Apagar uma informação.

import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2f8e5e612fafae",
    pass: "c3cb14de8e70d3"
  }
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  });

  await transport.sendMail({
    from: "Equipe feedget <equipe@feedget.com>",
    to: "Lucas Kobayashi <kobacarmo2@hotmail.com",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join("\n")
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("Tá rodando o sever");
});
