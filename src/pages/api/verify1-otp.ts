// pages/api/verify-otp.ts
import { NextApiRequest, NextApiResponse } from "next";

const sessions = new Map(); // Simulated in-memory session store

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { otp } = req.body;

    if (sessions.get("otp") === otp) {
      sessions.set("verified", true); // Mark session as verified
      return res.status(200).json({ success: true, message: "OTP verified" });
    } else {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
