import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TABS = [
  {
    title: "Fleet",
    description:
      "Spravujte svou flotilu, vytvářejte trasy pro řidiče, optimalizujte trasy pro maximální efektivitu, propojte své trasy s inventurou a další.",
    image: "/features/fleet.png",
  },
  {
    title: "Inventura",
    description:
      "Spravujte skladové zásoby. Mějte přehled o svém skladovém hospodářství. Hlídejte si převozy mezi sklady a akcemi. Vytvářejte příjemky a externí výdejky.",
    image: "/features/inventory.png",
  },
  {
    title: "Objednávky",
    description:
      "Spravujte skladové zásoby. Mějte přehled o svém skladovém hospodářství. Hlídejte si převozy mezi sklady a akcemi. Vytvářejte příjemky a externí výdejky.",
    image: "/features/inventory.png",
  },
];

export default function FeatureTabs() {
  return (
    <div>
      <div className="flex flex-col md:gap-3 items-center gap-20">
        {TABS.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            description={tab.description}
            image={tab.image}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
      <Button
        variant="secondary"
        size="lg"
        className="mt-10 w-full md:w-auto mx-auto block"
      >
        Zobrazit všechny aplikace
      </Button>
    </div>
  );
}

function Tab({
  className,
  title,
  description,
  image,
  reversed,
}: {
  className?: string;
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
}) {
  return (
    <div
      className={cn(
        [
          "flex md:flex-row flex-col-reverse items-center md:px-10 gap-10 md:gap-0",
        ],
        reversed && "md:flex-row-reverse"
      )}
    >
      <div className="flex-1">
        <h3 className="text-2xl md:text-5xl font-bold text-primary">{title}</h3>
        <p className="md:text-xl text-slate-500 mt-3 md:mt-6 leading-[135%]">
          {description}
        </p>
      </div>
      <div
        className={cn(["flex-1 flex justify-end", reversed && "justify-start"])}
      >
        <Image
          src={image}
          className="rounded-2xl border w-full md:w-[427.5px]"
          alt="Fleet modul"
          width={427.5}
          height={436.66}
        />
      </div>
    </div>
  );
}
