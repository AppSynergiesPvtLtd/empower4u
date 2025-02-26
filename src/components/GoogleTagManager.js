"use client";

import { useEffect } from "react";
import Script from "next/script";

const GoogleTagManager = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-BS3T1CLZJR");
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-BS3T1CLZJR"
      />
    </>
  );
};

export default GoogleTagManager;
