"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image';
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navItems = [
  { title: "About", href: "/about", hasDropdown: false },
  {
    title: "Specialty",
    href: "/specialty",
    hasDropdown: true,
    options: [
      { title: "Explore All", href: "/specialty/explore-all" },
      { title: "Stroke Rehab", href: "/specialty/stroke-rehab" },
      { title: "Vestibular disorder", href: "/specialty/vestibular-disorder" },
      { title: "Parkinson’s disease", href: "/specialty/parkinsons-disease" },
      { title: "Spinal cord injury", href: "/specialty/spinal-cord-injury" },
      { title: "Multiple sclerosis", href: "/specialty/multiple-sclerosis" },
      { title: "Guillain-Barrie Syndrome", href: "/specialty/guillain-barrie-syndrome" },
      { title: "Rare neurological conditions", href: "/specialty/rare-neurological-conditions" },
      { title: "Falls & Balance", href: "/specialty/falls-balance" },
      { title: "Fracture/Joint health", href: "/specialty/fracture-joint-health" },
      { title: "Surgery Rehab/Rehab", href: "/specialty/surgery-rehab" },
      { title: "Mental health", href: "/specialty/mental-health" },
    ],
  },
  {
    title: "For Professionals",
    href: "/for-professionals",
    hasDropdown: true,
    options: [
      { title: "Evidence", href: "/for-professionals/evidence" },
      { title: "Referrals", href: "/for-professionals/referrals" },
      { title: "HCPC Registration Support", href: "/for-professionals/hcpc-registration-support" },
    ],
  },
  {
    title: "For Clients and Families",
    href: "/for-clients-families",
    hasDropdown: true,
    options: [
      { title: "How we work together", href: "/for-clients-families/how-we-work-together" },
      { title: "Price", href: "/for-clients-families/price" },
    ],
  },
  {
    title: "Career",
    href: "/career",
    hasDropdown: true,
    options: [
      { title: "Work with us", href: "/career/work-with-us" },
      { title: "HCPC registration support", href: "/career/hcpc-registration-support" },
    ],
  },
  { title: "Policy", href: "/policy", hasDropdown: false },
  { title: "Enquiry", href: "/enquiry", hasDropdown: false },
];

export default function Navbar() {
  return (
  <nav className="text-navbar fixed inset-x-0 top-0 z-50 shadow-sm text-lg uppercase w-full"> 
    <div className="px-4">
      <div className="flex justify-between h-14 items-center w-full">
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center" prefetch={false}>
            <Image 
              src="/images/Logo/logo.svg" 
              alt="Empower4U Logo" 
              width={170} 
              height={170} 
            />
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
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
                          <ListItem
                            key={option.title}
                            title={option.title}
                            href={option.href}
                          >
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={item.href} passHref legacyBehavior>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
      </NavigationMenuList>
    </NavigationMenu>
        </div>
        <div className="flex-1 flex justify-center">
          <Button size="default">Book Now</Button>
        </div>
      </div>
    </div>
</nav>


  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
