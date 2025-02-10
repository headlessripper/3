import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { withSession } from '../../../lib/withSession';


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your Gmail email address
    pass: process.env.EMAIL_PASSWORD, // Your Gmail app password
  },
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Generate OTP (6 digits)
    const otp = crypto.randomInt(100000, 999999).toString();

    // Store OTP in the session
    req.session.set('otp', otp); // Storing OTP in the session
    await req.session.save();

    // Send OTP email using Nodemailer
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`,
    };

    try {
      await transporter.sendMail(mailOptions);

      // Return success response
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending OTP:', error);
      return res.status(500).json({ error: 'Error sending OTP' });
    }
  } else {
    return res.status(404).json({ error: 'Not Found' });
  }
}

export default withSession(handler);
