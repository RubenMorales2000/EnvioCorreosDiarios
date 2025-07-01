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
    from: `<${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_DEST,
    subject: "Recordatorio de tomar la medicación",
    text: "Hola, este es un recordatorio para que tomes tu medicación diaria. Por favor, asegúrate de seguir las indicaciones de tu médico. Te quiero mucho mi PCR ❤️.",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({message:"Correo enviado con exito", info}),
  };
}
