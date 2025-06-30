const nodemailer = require("nodemailer");

exports.handler = async function () {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Yo Diario" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DEST,
      subject: "Informe comida diario",
      text: "https://forms.office.com/Pages/ResponsePage.aspx?id=FBHdc33vx0CGaVadMufim2AMPA_octtFlOXoE2JKGbJUMUlIUFpMTDc0WlZDME1LVFc1WEJQM0JNNC4u",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Correo enviado", info }),
    };
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error al enviar el correo", error: error.message }),
    };
  }
};

// 🕒 Programar ejecución cada 15 minutos
exports.config = {
  schedule: "*/15 * * * *",
};
