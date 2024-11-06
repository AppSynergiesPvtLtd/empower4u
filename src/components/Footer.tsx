import React from 'react';
import { FaFacebookF, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-4 text-center text-sm text-gray-600 flex flex-col items-center justify-center space-y-2">
      <div className="flex justify-between items-center w-full max-w-6xl px-4">
        <p className="text-primary">
          © 2024 Empower4uRehabilitationClinic, All Rights Reserved. | 
          <a href="/terms" className="text-primaryhover:underline ml-1">T&C</a>
        </p>
        
        <div className="flex space-x-4 text-primary">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-maintext">
            <FaFacebookF />
          </a>
          <a href="tel:+123456789" className="hover:textprimary">
            <FaPhoneAlt />
          </a>
          <a href="mailto:info@empower4u.com" className="hover:text-maintext">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
