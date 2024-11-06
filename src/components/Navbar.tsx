"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navItems } from "@/config/navigationConfig";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"; // Icons for menu toggle and dropdown arrow

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null); // Track which dropdown is open

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title)); // Toggle open/close for the clicked dropdown
  };

  return (
    <nav className="text-navbar fixed inset-x-0 top-0 z-50 shadow-sm text-lg uppercase w-full bg-white">
      <div className="px-4 flex justify-between items-center h-14">
        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden text-primary"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex-1 flex justify-center" prefetch={false}>
          <Image src="/images/Logo/logo.svg" alt="Empower4U Logo" width={170} height={170} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title} className="relative">
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger className="uppercase">{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute left-0 mt-2">
                        <ul className="grid gap-3 p-4 w-52">
                          {item.options.map((option) => (
                            <ListItem key={option.title} title={option.title} href={option.href} />
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} passHref legacyBehavior>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Book Now Button for Desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <Link
            href="https://calendly.com/appsynergies"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-bold bg-primary text-white rounded-full hover:bg-maintext transition duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)}>
          <div
            className="fixed inset-y-0 left-0 w-64 bg-white p-6 shadow-lg transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="text-primary mb-4"
              onClick={() => setSidebarOpen(false)}
            >
              <FaTimes size={24} />
            </button>

            {/* Sidebar Navigation */}
            <nav>
              {navItems.map((item) => (
                <div key={item.title} className="mb-4">
                  <div className="flex justify-between items-center">
                    <Link href={item.href} className="block font-semibold text-lg uppercase">
                      {item.title}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.title)}
                        className="text-primary focus:outline-none"
                      >
                        <FaChevronDown
                          className={`transition-transform ${
                            openDropdown === item.title ? "transform rotate-180" : ""
                          }`}
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

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
