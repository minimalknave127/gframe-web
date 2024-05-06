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
import BurgerButton from "./burger";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { X } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  exact?: boolean;
  items?: { name: string; icon?: string; href: string }[];
  mobileOnly?: boolean;
};

export const navItems: NavItem[] = [
  // {
  //   name: "Přihlásit se",
  //   href: "https://app.gframe.app",
  //   exact: true,
  //   mobileOnly: true,
  // },
  {
    name: "Domů",
    href: "/",
    exact: true,
    mobileOnly: true,
  },
  {
    name: "Blog",
    href: "/blog",
    exact: false,
  },
  // {
  //   name: "Kontakt",
  //   href: "/kontakt",
  //   exact: true,
  // },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 15) setScrolled(true);
      else if (window.scrollY < 15) setScrolled(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenSheet(false);
  }, [pathname]);

  return (
    <nav
      className={cn([
        "sticky top-0 z-50 backdrop-blur-lg bg-white/90 text-black font-dmsans font-medium",
      ])}
    >
      <div
        className={cn([
          "flex justify-between items-center md:p-11 md:mb-10 p-7 mb-7 !pb-3",
          scrolled && "border-b",
        ])}
      >
        <div className="flex items-center gap-5">
          <Link href="/" className="mb-0.5">
            <motion.div
              initial={{ width: 140 }}
              animate={{
                width: scrolled ? 120 : 140,
              }}
            >
              <Logo className="w-full h-full" />
            </motion.div>
          </Link>
          <div className="md:flex hidden gap-5">
            {navItems.map((item, i) => {
              if (item.mobileOnly) return null;
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
                      "text-primary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Burger menu button */}
        <Sheet
          open={openSheet}
          onOpenChange={() => setOpenSheet((prev) => !prev)}
        >
          <SheetTrigger asChild className="focus:outline-none">
            <button className="flex flex-col gap-2 md:hidden relative z-50 p-2 pe-0">
              <div className="w-8 h-[3px] rounded-full bg-black"></div>
              <div className="w-8 h-[3px] rounded-full bg-black"></div>
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex justify-end  ">
              <SheetClose asChild className="focus:outline-none">
                <button className="relative w-10 h-10">
                  <div className="absolute w-8 h-[3px] rounded-full bg-black transform -translate-x-1/2 left-1/2 rotate-45 top-1/2"></div>
                  <div className="absolute w-8 h-[3px] rounded-full bg-black transform -translate-x-1/2 left-1/2 -rotate-45 top-1/2"></div>
                </button>
              </SheetClose>
            </div>
            <div className="mt-5">
              <div className="flex flex-col gap-2.5 items-start">
                <Button asChild className="w-full">
                  <a href="https://app.gframe.app/auth/register">
                    Registrovat se
                  </a>
                </Button>
                <Button variant="outline" className="w-full">
                  <a
                    className="w-full text-center"
                    href="https://app.gframe.app"
                  >
                    Přihlásit se
                  </a>
                </Button>
              </div>
              <ul className="mt-4 text-lg font-dmsans font-medium flex flex-col  ">
                {navItems.map((item, i) => {
                  const isActive =
                    (item.exact && pathname === item.href) ||
                    (!item.exact && pathname.startsWith(item.href));
                  return (
                    <li
                      key={i}
                      className={cn([isActive && "text-primary", "group"])}
                    >
                      <Link
                        className=" py-2 border-b block group-last:border-none"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex gap-5 items-center">
          <a href="https://app.gframe.app">Přihlásit se</a>
          <Button asChild>
            <a href="https://app.gframe.app/auth/register">Registrovat se</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
