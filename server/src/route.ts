import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUsecase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2f8e5e612fafae",
    pass: "c3cb14de8e70d3"
  }
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbackRepository();
  const submitFeedbackUsecase = new SubmitFeedbackUsecase(
    prismaFeedbacksRepository
  );

  await submitFeedbackUsecase.execute({
    type,
    comment,
    screenshot
  });

  // await transport.sendMail({
  //   from: "Equipe feedget <equipe@feedget.com>",
  //   to: "Lucas Kobayashi <kobacarmo2@hotmail.com",
  //   subject: "Novo feedback",
  //   html: [
  //     `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
  //     `<p>Tipo do feedback: ${type}</p>`,
  //     `<p>Comentário: ${comment}</p>`,
  //     `</div>`
  //   ].join("\n")
  // });

  return res.status(201).send();
});
