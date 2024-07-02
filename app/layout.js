import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/(components)/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taylor Bennett",
  description: "Created by @twolar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="myTheme">
      <body
        className={`{inter.className} max-w-3xl ml-auto mr-auto p-3 md:mt-20 md:mb-20`}
      >
        <Navbar />
        <div className="container-w-100 p-1">{children}</div>
      </body>
    </html>
  );
}
