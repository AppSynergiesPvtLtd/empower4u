"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import { FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-4 text-center text-sm text-gray-600 flex flex-col items-center justify-center space-y-2">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-10 space-y-4 md:space-y-0">
        <div className="">
          <p className="text-primary">
            © 2024 Empower4uRehabilitationClinic, All Rights Reserved. | 
            <a href="/terms" className="text-primary hover:underline ml-1">T&C</a>
          </p>
        </div>
        <div className="flex space-x-4 text-primary">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-maintext">
            <FaFacebookF />
          </a>
          <a href="tel:+123456789" className="hover:text-primary">
            <FaPhoneAlt />
          </a> */}
          <a href="mailto:info@empower4u.org" className="hover:text-maintext">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
