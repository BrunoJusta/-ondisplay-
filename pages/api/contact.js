export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  //GMAIL
  // const transporter = nodemailer.createTransport({
  //   port: 465,
  //   host: "smtp.gmail.com",
  //   service: "Gmail",
  //   auth: {
  //     user: "brunomajusta@gmail.com",
  //     pass: process.env.password,
  //   },
  //   secure: true,
  // });
  OUTLOOK;
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "email@willbe.pt",
      pass: "webaniceday!2021",
    },
  });
  const mailData = {
    from: "email@willbe.pt",
    to: `${req.body.email}`,
    subject: `Message From ${req.body.email}`,
    text:
      "Nome: " +
      req.body.name +
      " |  email: " +
      req.body.email +
      " |  Cidade: " +
      req.body.phone +
      " | Mensagem: " +
      req.body.message,
    html: `<div>De: ${req.body.name} - Email: ${req.body.email}
      <br>Cidade: ${req.body.phone} 
      <br><br>${req.body.message}</div>`,
  };
  transporter.sendMail(mailData, function (err, result) {
    if (err) {
      res.status(400).send(err);
    }
    if (result) {
      res.status(200).send(result);
    }
  });
}
