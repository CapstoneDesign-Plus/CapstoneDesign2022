import env from "../config";
import { createTransport, Transporter } from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export default class MailService {

  private static instance : MailService;

  private transporter: Transporter;

  private constructor() {
    this.transporter = createTransport({
      service: 'gmail',
      auth: {user: env.SMTP_ID, pass: env.SMTP_PW},
    })
  }

  async sendMail(to: string, subject: string, html: string) {
    const mailOptions : Mail.Options = {
      to, subject, html
    }

    await this.transporter.sendMail(mailOptions);
  }

  public static getInstance() {
    if(!MailService.instance){
      MailService.instance = new MailService();
    }
    return MailService.instance;
  }

}