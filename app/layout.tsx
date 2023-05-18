import Head from "next/head";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Tac-Toe",
  description: "Classic tic tac toe built for the web with NextJS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className} id="main">
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
