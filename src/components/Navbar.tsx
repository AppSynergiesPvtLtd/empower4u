"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/config/navigationConfig";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => setOpenDropdown(title);
  const handleMouseLeave = () => setOpenDropdown(null);
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <nav className="text-navbar fixed inset-x-0 top-0 z-50 shadow-sm text-sm uppercase w-full bg-[#f9f5f1]">
      <div className="px-4 flex justify-between items-center h-16">
        
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image src="/images/Logo/logo.svg" alt="Empower4U Logo" width={170} height={170} />
        </Link>

        <div className="hidden md:flex flex-1 justify-center space-x-6 font-semibold text-primary">
          {navItems.map((item) => (
  <div
    key={item.title}
    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.title)}
    onMouseLeave={handleMouseLeave}
    className="relative group"
  >
    <Link
      href={item.href}
      className={`px-4 py-2 text-xs flex items-center hover:border-b-2 hover:border-maintext ${
        pathname === item.href ? 'text-primary border-b-2 border-maintext' : ''
      } transition-colors duration-300`}
    >
      {item.title}
      {item.hasDropdown && (
        <FaChevronDown
          className={`ml-2 transition-transform ${
            openDropdown === item.title ? 'transform rotate-180' : ''
          }`}
          size={10}
        />
      )}
    </Link>

    {item.hasDropdown && openDropdown === item.title && (
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md">
        {item.options?.map((option) => (
          <Link
            key={option.title}
            href={option.href}
            className="block px-4 py-2 text-xs text-primary hover:bg-primary hover:text-white"
          >
            {option.title}
          </Link>
        ))}
      </div>
    )}
  </div>
))}

        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="https://calendly.com/appsynergies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-sm font-semibold bg-primary text-white rounded-full hover:bg-maintext transition duration-200"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden text-white bg-primary p-2 rounded-sm"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div
            className="fixed inset-y-0 left-0 w-64 bg-white p-6 shadow-lg transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-primary mb-4"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes size={24} />
            </button>
            
            
            <nav>
              {navItems.map((item) => (
                <div key={item.title} className="mb-4">
                  <div className="flex justify-between items-center">
                    <Link href={item.href} className="block font-semibold text-sm uppercase">
                      {item.title}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.title)}
                        className="text-primary focus:outline-none"
                      >
                        <FaChevronDown
                          className={`transition-transform ${openDropdown === item.title ? "transform rotate-180" : ""}`}
                          size={11}
                        />
                      </button>
                    )}
                  </div>

                  {item.hasDropdown && openDropdown === item.title && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.options.map((option) => (
                        <li key={option.title}>
                          <Link href={option.href} className="text-sm">
                            {option.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <Button size="default" className="w-full">Book Now</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
