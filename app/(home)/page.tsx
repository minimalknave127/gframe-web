import Image from "next/image";
import { Container } from "../../components/container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Section from "@/components/section";
import FunctionCard from "@/components/function-card";
import SectionTitle from "@/components/section-title";
import HomeTabs from "./components/home-tabs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header>
        <Container className="flex flex-col gap-10 items-center">
          <div className="bg-gradient-to-r rounded-full from-[#EA5753] to-[#FFB88E]">
            <span className="bg-white block rounded-full  m-[1px] p-2">
              <h6 className="font-medium md:text-sm text-xs">
                🎉 První modulový systém
              </h6>
            </span>
          </div>
          <div>
            <h1 className="md:text-7xl text-3xl font-bold text-center mb-5">
              Vaše firma na cloudu
            </h1>
            <p className="md:text-xl text-base text-center">
              Sestavte si během pár minut vlastní systém a řiďte svojí firmu
              moderně, přehledně a rychle.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full gap-3 justify-center">
            <Button asChild className="md:w-auto w-full" size="lg">
              <Link target="_blank" href="https://www.gframe.app">
                Začít zdarma
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="md:w-auto w-full">
              Jak to funguje <ChevronRight className="ms-3" />
            </Button>
          </div>
        </Container>
      </header>

      <Container>
        <Image
          height={630}
          width={1216}
          src="/hero.png"
          className="object-contain mt-20 !w-full shadow-2xl rounded-xl max-w-full border"
          alt="Application preview"
        />
      </Container>
      <Section>
        <Container className="flex flex-col items-center">
          <SectionTitle
            title="Chytré propojení"
            description="Gframe funguje na bázi modulů, které si můžete kdykoliv aktivovat a navzájem kombinovat. Díky tomu si můžete systém nastavit přesně sobě na míru."
          />
          {/* <div className="flex flex-col md:flex-row mb-20">
            <h2 className="md:text-5xl text-3.5xl font-bold mb-5 md:flex-1">
              Chytré propojení
            </h2>
            <p className="md:text-xl text-base md:flex-1 text-gray-700">
              Gframe funguje na bázi modulů, které si můžete kdykoliv aktivovat
              a navzájem kombinovat. Díky tomu si můžete systém nastavit přesně
              sobě na míru.
            </p>
          </div> */}
          <div className="flex w-full gap-8 flex-col md:flex-row">
            <FunctionCard
              className="flex-1"
              title="Všechny moduly jsou propojené"
              content="/svg/connected-modules.svg"
            />
            <FunctionCard
              className="flex-1"
              title="Dostupnost kdekoliv a kdykoliv"
              content="/svg/globe.svg"
            />
            <FunctionCard
              className="flex-1"
              title="Intuitivní jednoduché ovládání"
              content="/svg/intuitivity.svg"
            />
          </div>
        </Container>
      </Section>
      <Section id="modules">
        <Container>
          <SectionTitle
            vertical
            center
            title="Vše co potřebujete na jednom místě"
            description="Přizpůsobte si systém GFrame na míru svému podnikání."
          />
          <HomeTabs />
        </Container>
      </Section>
      <Section>
        <div className="md:container px-4">
          <div className="flex bg-stone-100 gap-6 overflow-hidden rounded-3xl items-center md:flex-row flex-col">
            <div className="flex-1 w-full flex flex-col items-start justify-start md:gap-11 gap-7 md:p-16 p-6 md:pe-0">
              <h2 className="md:text-4xl/normal text-2xl font-bold ">
                Propojte svůj systém s mobilní aplikací
              </h2>
              <p className="md:text-xl">
                K systému GFrame dostanete přístup k příslušným aplikacím, které
                můžete využít v terénu.
              </p>
              <div className="flex flex-col md:flex-row  w-full gap-3">
                <Button className="md:w-auto w-full" size="lg">
                  Začít zdarma
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="md:w-auto w-full hover:bg-stone-50"
                >
                  Jak to funguje <ChevronRight className="ms-3" />
                </Button>
              </div>
            </div>
            <div className="flex-1 md:p-16 p-6 md:pb-0 md:ps-0 pt-0 md:pt-16 -mb-32 md:mb-0 flex md:self-end">
              <Image
                alt="Drivers app design"
                src="/phone.png"
                className="md:ms-auto md:mr-0 m-auto"
                width={338.57}
                height={692}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section className="pb-28">
        <Container className="flex gap-10 justify-between flex-col md:flex-row">
          {[
            {
              name: "Spravedlivé placení",
              desc: "Platíte jen za moduly, které skutečně používáte.",
              icon: "cash",
            },
            {
              name: "Přístup online",
              desc: "Přístup  kdykoliv a odkudkoliv. Třeba v zahraničí.",
              icon: "globe",
            },
            {
              name: "24/7 podpora",
              desc: "Naše podpora je vám k dispozici 24/7 i o víkendu.",
              icon: "phone",
            },
          ].map((e, i) => (
            <div key={i} className="flex-1 flex flex-col md:gap-6 gap-4">
              <Image
                src={`/icons/${e.icon}.svg`}
                alt="Cash icon"
                width={45}
                height={45}
              />
              <h3 className="font-bold md:text-xl text-lg">{e.name}</h3>
              <p className="md:text-lg text-slate-700">{e.desc}</p>
            </div>
          ))}
        </Container>
      </Section>
    </main>
  );
}
