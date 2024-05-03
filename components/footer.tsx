"use client";
import FlakeIcon from "@/app/svg/flake";
import { Container } from "./container";
import { Button } from "./ui/button";
import { UnderlineText } from "./underline-text";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-[102px] md:mt-[172px] w-full">
      <div className="px-4">
        <div className="w-full flex flex-col overflow-hidden justify-center items-center md:py-20 py-10 rounded-2xl relative  md:pb-0 pb-[50vw] md:min-h-[80vh] after:content-[''] after:rounded-2xl after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0  after:bg-slate-100 after:-z-10 ">
          <h2 className="md:text-5xl text-2xl font-bold mb-5 xl:max-w-xl md:max-w-2xl max-w-max xl:leading-tight xl:tracking-tighter md:mb-10 text-center">
            Přidejte se k rostoucí komunitě a automatizujte ještě dnes
          </h2>

          <Button asChild size="lg">
            <Link href="https://app.gframe.app/auth/register ">
              Registrovat se zdarma
            </Link>
          </Button>
          <div className="absolute md:block hidden top-0 left-0 xl:-translate-x-1/3 xl:-translate-y-1/3 md:-translate-x-1/2 md:-translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <FlakeIcon className="text-primary xl:w-[548px] md:w-[450px]" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 md:right-0 md:left-auto right-auto left-1/2 xl:translate-x-1/3 xl:translate-y-1/3 md:translate-x-1/2 md:translate-y-1/2 -translate-x-1/2 translate-y-[60%]">
            {/* <div className="absolute md:block   right-0 bottom-0 xl:translate-x-1/3 xl:translate-y-1/3 md:translate-x-1/2 md:translate-y-1/2 -translate-x-1/2  "> */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              <FlakeIcon className="text-primary xl:w-[548px] md:w-[450px] w-screen" />
            </motion.div>
          </div>
        </div>
      </div>
      <Container className="mt-10 mb-10 flex justify-between">
        <div>logo</div>
        <div className="flex gap-52">
          <ul className="font-dmsans font-medium">
            <li className="font-bold">Navigace</li>
            <li>
              <Link href="/">Domů</Link>
            </li>
            {/* <li>Aplikace</li>
            <li>Blog</li>
            <li>Kontakt</li> */}
          </ul>
          <ul className="font-dmsans font-medium">
            <li className="font-bold">Kontakt</li>
            <li>
              Pláničkova 443/5
              <br />
              Praha 6 - Veleslavín
            </li>
            <li>GLOB Software, s.r.o.</li>
            <li>CZ10722530</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
