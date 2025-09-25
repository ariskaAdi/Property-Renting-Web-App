import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css"
import Providers from "../providers";
import { Header } from "@/components/layouts/header/header";
import { Footer } from "@/components/layouts/footer/footer";
<<<<<<< HEAD
=======
import { ToastContainer } from "react-toastify";
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homz",
  description: "Homz",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
<<<<<<< HEAD
=======
          <ToastContainer/>
>>>>>>> 7b29b52940e187336f48ff3e6913f8aa62356e37
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
