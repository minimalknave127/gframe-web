"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "@/assets/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const navItems = [
  {
    name: "Domů",
    href: "/",
    exact: true,
  },
  {
    name: "Naše služby",
    href: "/sluzby",
    items: [
      {
        name: "Inventura a sklady",
        icon: "/svg/house.svg",
        href: "/poop",
      },
      {
        name: "Interní objednávky",
        icon: "/svg/box.svg",
        href: "/peep",
      },
      {
        name: "Car fleet",
        icon: "/svg/truck.svg",
        href: "/paap",
      },
    ],
  },
  {
    name: "Kontakt",
    href: "/pop",
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 15) setScrolled(true);
      else if (window.scrollY < 15) setScrolled(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 text-black">
      <div
        className={cn([
          "flex justify-between items-center md:p-11 md:mb-10 p-7 mb-7 !pb-3 container",
          scrolled && "border-b",
        ])}
      >
        <div className="hidden xl:flex items-center gap-5">
          <Link href="/">
            <motion.div
              initial={{ width: 60, height: 50 }}
              animate={{ height: scrolled ? 40 : 50 }}
            >
              <Logo className="w-full h-full" />
            </motion.div>
          </Link>
          {navItems.map((item, i) => {
            if (item.items) {
              return (
                <DropdownMenu key={i}>
                  <DropdownMenuTrigger className="focus:outline-none">
                    {item.name}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.items.map((e, k) => (
                      <Link key={k} href={e.href}>
                        <DropdownMenuItem className="cursor-pointer flex gap-2 items-center">
                          {e.icon && (
                            <Image
                              src={e.icon}
                              alt="item icon"
                              width={32}
                              height={32}
                            />
                          )}
                          {e.name}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link
                key={i}
                href={item.href}
                className={cn(
                  ((item.exact && pathname === item.href) ||
                    (!item.exact && pathname.startsWith(item.href))) &&
                    "font-semibold"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          {/* <Link href="/" className={cn(pathname === "/" && "font-semibold")}>
            Domů
          </Link>
          <Link href="/">O nás</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              Naše služby
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="https://google.com" prefetch={false} target="_blank">
                <DropdownMenuItem className="cursor-pointer flex gap-2  items-center">
                  <Image
                    src="/svg/house.svg"
                    alt="item icon"
                    width={32}
                    height={32}
                  />
                  Inventura a sklady
                </DropdownMenuItem>
              </Link>
              <Link href="/#modules">
                <DropdownMenuItem className="cursor-pointer flex gap-2 items-center">
                  <Image
                    src="/svg/house.svg"
                    alt="item icon"
                    width={32}
                    height={32}
                  />
                  Inventura a sklady
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/">Kontakt</Link> */}
        </div>
        <div className="flex gap-5 items-center">
          <Link href="https://app.gframe.app">Přihlásit se</Link>
          <Button asChild>
            <Link href="/">Registrovat se</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
