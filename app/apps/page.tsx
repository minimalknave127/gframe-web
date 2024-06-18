import { Container } from "@/components/container";
import AppCard from "./components/card";

export default function AppsPage() {
  return (
    <main>
      <Container>
        <h1 className="xl:text-[80px] md:text-7xl text-4xl font-bold">
          Aplikace 📱
        </h1>
        <h2 className="text-lg md:text-xl mt-4 spacing tracking-normal">
          Instalujte aplikace a rozšiřte svůj GFrame.
        </h2>
        <section className="w-full mt-[40px] md:mt-[80px]">
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            <AppCard
              icon={"inventory"}
              title="Inventura"
              description="Spravujte skladové zásoby a inventuru pohodlně z kanceláře i terénu."
            />
            <AppCard
              icon={"fleet"}
              title="Trasy a vozidla"
              description="Spravujte vozový park, plánujte a optimalizujte trasy."
            />
            <AppCard
              icon={"orders"}
              title="Objednávky"
              description="Spravujte objednávky a zákazníky, sledujte stav a historii objednávek."
            />
            <AppCard
              icon={"bulb"}
              title="Vaše aplikace?"
              description="Vytvoříme vám aplikaci levně a na míru. Navíc bude plně integrovaná s již existujícími aplikacemi."
              className="bg-transparent"
              action="/blog/vlastni-aplikace-na-miru-zadny-problem"
            />
          </div>
        </section>
      </Container>
    </main>
  );
}
