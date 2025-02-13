import { NextApiRequest, NextApiResponse } from "next";

const sessions = new Map(); // Simulated in-memory session store
const adminPassword = process.env.ADMIN_PASSWORD || "Admin@9671"; // Use env variable

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { action } = req.query;

  if (req.method === "POST") {
    switch (action) {
      case "send-otp":
        return sendOtp(req, res);
      case "verify-otp":
        return verifyOtp(req, res);
      case "admin-auth":
        return authenticateAdmin(req, res);
      default:
        return res.status(400).json({ error: "Invalid action" });
    }
  } else if (req.method === "GET" && action === "check-session") {
    return checkSession(req, res);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

const sendOtp = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
    sessions.set("otp", otp);
    console.log("Generated OTP:", otp); // Debugging, remove in production
    return res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error); // ✅ Log the error to avoid ESLint warning
    return res.status(500).json({ success: false, error: "Failed to send OTP" });
  }
};

const verifyOtp = (req: NextApiRequest, res: NextApiResponse) => {
  const { otp } = req.body;
  if (sessions.get("otp") === otp) {
    sessions.set("verified", true);
    return res.status(200).json({ success: true, message: "OTP verified" });
  } else {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }
};

const authenticateAdmin = (req: NextApiRequest, res: NextApiResponse) => {
  const { password } = req.body;
  if (password === adminPassword) {
    sessions.set("isAdmin", true);
    return res.status(200).json({ success: true, message: "Admin authenticated" });
  } else {
    return res.status(403).json({ success: false, message: "Incorrect password" });
  }
};

const checkSession = (req: NextApiRequest, res: NextApiResponse) => {
  const verified = sessions.get("verified") || false;
  return res.status(200).json({ verified });
};
