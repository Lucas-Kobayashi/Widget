import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2f8e5e612fafae",
    pass: "c3cb14de8e70d3"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <equipe@feedget.com>",
      to: "Lucas Kobayashi <kobacarmo2@hotmail.com",
      subject,
      html: body
    });
  }
}
