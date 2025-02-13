// pages/api/admin-auth.ts
import { NextApiRequest, NextApiResponse } from "next";

const sessions = new Map(); // Simulated in-memory session store
const adminPassword = "Admin@9671"; // Replace with environment variable for production

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { password } = req.body;

    if (password === adminPassword) {
      sessions.set("isAdmin", true); // Set admin status in session
      return res.status(200).json({ success: true, message: "Admin authenticated" });
    } else {
      return res.status(403).json({ success: false, message: "Incorrect password" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
