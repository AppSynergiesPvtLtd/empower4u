import { Toaster } from "react-hot-toast";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallCTA from "@/components/CallCTA";
import GoogleTagManager from "@/components/GoogleTagManager";
import Script from "next/script";
// import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Empower4U",
  description: "Rehabilitation Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
       <head>
        {/* GTM Script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-5WXNGJVJ');`}
        </Script>
      </head>
      <body className="antialiased flex flex-col min-h-screen mt-10 overflow-x-hidden">
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5WXNGJVJ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Toaster position="top-right" reverseOrder={ false } />
        <GoogleTagManager />
        
        <NavBar />
        {/* <PageTransition> */}
          {children}
        {/* </PageTransition> */ }
        <CallCTA/>
        <Footer />

      </body>
    </html>
  );
}
