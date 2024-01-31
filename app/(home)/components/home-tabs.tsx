"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as Tabs from "@radix-ui/react-tabs";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { forwardRef, useState } from "react";
import HouseIcon from "@/app/svg/house.svg";
import { TabsContent } from "@/components/ui/tabs";

const TABS = [
  {
    name: "Inventura a sklady",
    description: "Správa skladové ekonomiky, skladů a skladových zásob.",
    iconSrc: "/svg/house.svg",
    value: "tab1",
    contentTitle: "Moderní správa skladové ekonomiky",
    contentDescription: "Mějte dokonalý přehled o vaší skladové ekonomice.",
  },
  {
    name: "Interní objednávky",
    description: "Správa skladové ekonomiky, skladů a skladových zásob.",
    iconSrc: "/svg/box.svg",
    value: "tab2",
    contentTitle: "Moderní systém na interní a externí objednávky",
    contentDescription: "Mějte dokonalý přehled o vaší skladové ekonomice.",
  },
  {
    name: "Car fleet",
    description: "Správa skladové ekonomiky, skladů a skladových zásob.",
    iconSrc: "/svg/truck.svg",
    value: "tab3",
    contentTitle: "Moderní systém pro hlídání a správu vozového parku",
    contentDescription: "Mějte dokonalý přehled o vaší skladové ekonomice.",
  },
];

export default function HomeTabs() {
  const [value, setValue] = useState("tab1");
  return (
    <>
      <div className="block sticky top-0 z-30 pt-2 bg-white md:hidden">
        <Select onValueChange={(val) => setValue(val)} value={value}>
          <SelectTrigger>
            <SelectValue placeholder="Poop" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {TABS.map((tab) => (
                <SelectItem value={tab.value} key={tab.value}>
                  <div className="flex items-center h-full w-full">
                    <img
                      alt="house svg"
                      // width={24}
                      // height={24}
                      className="me-2 inline-block w-10 h-10"
                      src={tab.iconSrc}
                    />

                    <span> {tab.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Tabs.Root
        defaultValue="tab1"
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <Tabs.List className="shrink-0 hidden md:flex   w-full justify-between ">
          {TABS.map((tab) => (
            <TabItem
              key={tab.value}
              tabValue={tab.value}
              iconSrc={tab.iconSrc}
              name={tab.name}
              description={tab.description}
            />
          ))}
        </Tabs.List>
        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <HomeTabContent
              title={tab.contentTitle}
              description={tab.contentDescription}
            />
          </TabsContent>
        ))}
      </Tabs.Root>
    </>
  );
}

const HomeTabContent = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="md:pt-20 pt-10 flex flex-col-reverse w-full md:flex-row items-center gap-10">
    <div className="flex-1 flex flex-col gap-11 w-full">
      <div>
        <h3 className="md:text-4xl/normal text-2xl font-bold mb-4">{title}</h3>
        {description && <p className="md:text-xl">{description}</p>}
      </div>
      <div className="flex gap-5">
        <Button className="flex-1 md:flex-none">Začít zdarma</Button>
        <Button variant="ghost" className="flex-1 md:flex-none">
          Více informací <ChevronRight className="ms-2 w-5 h-5" />
        </Button>
      </div>
    </div>
    <div className="flex-1 w-full">
      <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl bg-stone-200 overflow-hidden">
        <Image
          src="/hero.png"
          alt="dashboard example"
          fill
          className="w-full h-full object-contain p-10 rounded-3xl"
        />
      </div>
    </div>
  </div>
);

const TabItem = forwardRef(
  (
    {
      tabValue,
      iconSrc,
      name,
      description,
    }: {
      tabValue: string;
      iconSrc: string;
      name: string;
      description?: string;
    },
    ref: any
  ) => (
    <Tabs.Trigger
      ref={ref}
      value={tabValue}
      className="flex justify-start items-start gap-4 px-5 py-6 border-b-slate-300 border-b-2 data-[state=active]:border-b-slate-900"
    >
      <Image alt="house svg" width={70} height={70} src={iconSrc} />
      <div className="flex flex-col justify-start items-start">
        <h3 className=" font-poppins font-semibold">{name}</h3>
        {description && (
          <p className="text-slate-800 text-start">{description}</p>
        )}
      </div>
    </Tabs.Trigger>
  )
);
