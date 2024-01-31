import Image from "next/image";
import { Container } from "./container";
import { Button } from "./ui/button";
import { UnderlineText } from "./underline-text";
import Logo from "@/assets/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white py-20 rounded-t-3xl">
      <Container className="flex flex-col gap-5 md:gap-10">
        <h1 className="md:text-5xl text-2xl font-semibold md:flex-1 text-center">
          Začněte ješte dnes <UnderlineText>zdarma</UnderlineText>
        </h1>
        <p className="text-center md:text-xl text-base ">
          Získejte kontrolu nad firemními procesy ještě dnes.
        </p>
        <Button
          className="mx-auto text-black bg-slate-200 hover:bg-slate-300"
          size="lg"
        >
          Začít zdarma
        </Button>
        <div className="relative my-10 md:my-16 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t from-slate-950 to-transparent">
          <Image
            src="/hero.png"
            alt="Gframe dashboard"
            className="w-full"
            height={630}
            width={1216}
          />
        </div>
      </Container>
      <Container className="flex justify-between flex-col md:flex-row mt-5">
        <div>
          <Logo />
        </div>
        <div className="flex md:gap-20 gap-10 flex-col md:flex-row mt-10 md:mt-0">
          <ul className="flex flex-col gap-2">
            <li className="font-semibold mb-1">Navigace</li>
            <li>
              <Link href="/">Řešení</Link>
            </li>
            <li>Přihlášení</li>
            <li>Kontakt</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="font-semibold mb-1">Kontakt</li>
            <li>
              <Link href="/">
                Pláničkova 443/5,
                <br />
                Praha 6 - Veleslavín
              </Link>
            </li>
            <li>
              <Link href="/">info@gframe.cz</Link>
            </li>
            <li>
              <Link href="/">+420 739 478 299</Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
