import { withIronSession } from 'next-iron-session';
import { NextApiHandler } from 'next';

const sessionOptions = {
  password: process.env.SESSION_SECRET ?? 'default_secure_password', // Fallback to a default string if undefined
  cookieName: 'bobaas-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production', // Secure cookies only in production
  },
};

export function withSession(handler: NextApiHandler) {
  return withIronSession(handler, sessionOptions);
}

export function withSessionSsr(handler: NextApiHandler) {
  return withIronSession(handler, sessionOptions);
}
