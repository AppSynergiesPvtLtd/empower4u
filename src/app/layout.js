import localFont from "next/font/local";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import 'react-phone-input-2/lib/style.css';
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingLayout from "@/components/LoadingLayout";

export const metadata = {
  title: "Empower4U",
  description: "Rehabilitation Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen mt-10">
        <Toaster position="top-right" reverseOrder={false} />
        <NavBar />
        <LoadingLayout>{children}</LoadingLayout>
        <Footer />
      </body>
    </html>
  );
}
