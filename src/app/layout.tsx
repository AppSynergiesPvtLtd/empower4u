// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Empower4U",
  description: "Rehabilitation Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen `}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
