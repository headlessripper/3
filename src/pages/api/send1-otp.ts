// pages/api/send-otp.ts
import { NextApiRequest, NextApiResponse } from "next";

const sessions = new Map(); // Simulated in-memory session store

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
      sessions.set("otp", otp); // Store OTP in the session (for verification)
      console.log("Generated OTP:", otp); // For debugging purposes, remove in production
      return res.status(200).json({ success: true, message: "OTP sent successfully" });
    } catch (error) {
      console.error("Error sending OTP:", error); // Log the error to avoid ESLint warning
      return res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
