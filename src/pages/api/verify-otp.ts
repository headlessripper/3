// /pages/api/verify-otp.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { withSession } from '../../../lib/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { otp } = req.body;
    
    // Retrieve OTP from session
    const sessionOtp = req.session.get('otp'); // Get OTP from session

    if (otp === sessionOtp) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ error: 'Invalid OTP' });
    }
  } else {
    return res.status(404).json({ error: 'Not Found' });
  }
}

export default withSession(handler);
