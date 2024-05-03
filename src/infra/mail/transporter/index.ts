import nodemailer from 'nodemailer';

export const transporter: nodemailer.Transporter<unknown> =
  nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'user',
      pass: 'password',
    },
  });
