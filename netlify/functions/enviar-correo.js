const nodemailer = require("nodemailer");

exports.handler = async function (event, context) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ruben11112000@gmail.com",
      pass: "lkjj pbqd mumj zsef",
    },
  });

  const info = await transporter.sendMail({
    from: `"Yo Diario" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_DEST,
    subject: "Correo Diario",
    text: "Prueba de envio de correo diario",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Correo enviado", info }),
  };
};
