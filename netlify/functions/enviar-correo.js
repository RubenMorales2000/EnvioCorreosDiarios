import { createTransport } from "nodemailer";

export async function handler () {
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `"Rellenar Formulario Diario" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_DEST,
    subject: "Informe comida diario",
    text: "https://forms.office.com/Pages/ResponsePage.aspx?id=FBHdc33vx0CGaVadMufim2AMPA_octtFlOXoE2JKGbJUMUlIUFpMTDc0WlZDME1LVFc1WEJQM0JNNC4u",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({message:"Correo enviado", info}),
  };
}
