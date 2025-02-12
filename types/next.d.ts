// types/next.d.ts
import { NextApiRequest } from 'next';

declare module 'next' {
  interface NextApiRequest {
    session: any; // You can replace 'any' with a more specific type if you have one
  }
}
