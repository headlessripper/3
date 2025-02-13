import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your email
      pass: process.env.EMAIL_PASSWORD, // App password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error); // ✅ Log the error to avoid ESLint warning
    res.status(500).json({ error: "Failed to send message" });
  }
}
