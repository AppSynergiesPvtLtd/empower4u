
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

const LoadingLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default LoadingLayout;
