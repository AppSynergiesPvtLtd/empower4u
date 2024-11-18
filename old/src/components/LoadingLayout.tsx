"use client";

import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";

const LoadingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default LoadingLayout;
