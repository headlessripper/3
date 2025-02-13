// pages/api/check-session.ts
import { NextApiRequest, NextApiResponse } from "next";

const sessions = new Map(); // Simulated in-memory session store

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const verified = sessions.get("verified") || false;
    return res.status(200).json({ verified });
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
