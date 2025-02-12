import type { AppProps } from 'next/app';
import { Roboto } from "next/font/google";
import '@/styles/globals.css';
import '@/styles/sintec.css';
import '@/styles/responsive.css';
import '@/styles/TimeTable.css'; // Add this line
import '@/styles/contactus.css'; // Add this line

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Apply global font family from the roboto object */}
      <style jsx global>{`
        html, body {
          font-family: ${roboto.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
