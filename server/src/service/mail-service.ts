
import nodemailer from "nodemailer";

export default class MailService {
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }

      // host: process.env.SMTP_HOST,
      // port: process.env.SMTP_PORT,
      // secure: false,
      // auth: {
      //   user: process.env.SMTP_USER,
      //   pass: process.env.SMTP_PASSWORD,
      // },
    });
  }
  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Активация акаунта на ` + process.env.SMTP_URL,
      text: "",
      html: `
    <div>
      <h1>Для активации перейдите по ссылке</h1>
      <a href="${link}">${link}</a>
    </div>
  `,
    });
  }
}
