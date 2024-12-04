"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/config/navigationConfig";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = (title) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 400);
  };

  const handleDropdownToggle = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <nav className="px-4 text-navbar fixed inset-x-0 top-0 z-50 shadow-sm text-sm uppercase w-full bg-[#f9f5f1]">
      <div className="px-4 md:px-0 flex justify-between items-center h-16">
        <button
          className="md:hidden text-white bg-primary p-2 rounded-sm"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>
        <Link href="/" className="flex items-center mx-auto" prefetch={false}>
          <img
            src="/images/Logo/logo.svg"
            alt="Empower4U Logo"
            width={170}
            height={170}
            priority
          />
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
                className={`px-1 py-2 text-xs flex items-center !border-b-2 !border-[#fbf3f3] hover:!border-maintext ${
                  pathname === item.href ||
                  item.options?.some((option) => pathname === option.href)
                    ? "text-primary !border-b-2 !border-maintext"
                    : ""
                } transition-colors duration-300`}
              >
                {item.title}
                {item.hasDropdown && (
                  <FaChevronDown
                    className={`ml-2 transition-transform ${
                      openDropdown === item.title ? "transform rotate-180" : ""
                    }`}
                    size={10}
                  />
                )}
              </Link>

              {item.hasDropdown && openDropdown === item.title && (
                <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg py-1 rounded-md">
                  {item.options?.map((option) => (
                    <Link
                      key={option.title}
                      href={option.href}
                      className={`block px-4 py-2 text-xs text-primary hover:bg-primary hover:text-white ${
                        pathname === option.href ? "bg-primary text-white" : ""
                      }`}
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
            href="https://calendly.com/shu-empower4u"
            target="_blank"
            rel="noopener noreferrer"
            className="md:mr-4 px-6 py-2 text-sm font-semibold bg-primary text-white rounded-full hover:bg-maintext transition duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-60 bg-white p-6 shadow-2xl transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between">
              <img
                src="/images/Logo/logo2.svg"
                alt="Empower4U Logo"
                width={70}
                height={70}
                priority
              />
              <button
                className="text-black font-thin mb-4"
                onClick={() => setSidebarOpen(false)}
              >
                <FaTimes size={18} />
              </button>
            </div>

            <nav className="bg-white">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  item.options?.some((option) => option.href === pathname);

                return (
                  <div
                    key={item.title}
                    className="mb-4 mt-10 justify-between items-center text-primary font-normal text-xs uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      <div
                        onClick={() => {
                          if (!item.hasDropdown) {
                            setSidebarOpen(false);
                          } else {
                            handleDropdownToggle(item.title);
                          }
                        }}
                      >
                        <Link
                          href={item.href}
                          className={`block text-primary font-normal uppercase ${
                            isActive
                              ? "!border-b-2 pb-1 !border-maintext"
                              : ""
                          }`}
                        >
                          {item.title}
                        </Link>
                      </div>
                      {item.hasDropdown && (
                        <button
                          onClick={() => handleDropdownToggle(item.title)}
                          className="text-primary focus:outline-none ml-2"
                        >
                          <FaChevronDown
                            className={`transition-transform ${
                              openDropdown === item.title
                                ? "transform rotate-180"
                                : ""
                            }`}
                            size={11}
                          />
                        </button>
                      )}
                    </div>

                    {item.hasDropdown && openDropdown === item.title && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.options.map((option) => (
                          <li
                            key={option.title}
                            className="mt-1"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <Link
                              href={option.href}
                              className={`text-xs m-1 text-maintext capitalize ${
                                pathname === option.href
                                  ? "!border-b-2 !border-maintext"
                                  : ""
                              }`}
                            >
                              {option.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
              <div className="mt-12 flex justify-center">
                <Button size="default" className="w-3/5 rounded-3xl">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
