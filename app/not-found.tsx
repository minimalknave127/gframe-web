import { Container } from "@/components/container";
import NotFoundAnimation from "@/components/not-found-animation";
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";
import Link from "next/link";
export default function NotFound() {
  const headersList = headers();
  console.log(
    "headers",
    headersList.forEach((header, e) => console.log(e, header))
  );
  const path = headersList.get("referer");
  console.log("path", path);
  return (
    <Container>
      <NotFoundAnimation />
      <div className="py-20 text-center -mt-20 ">
        <h1 className="text-3xl font-semibold">
          Stránka kterou hledáte nebyla nalezena
        </h1>

        <Button asChild className="mt-5" size="lg">
          <Link href="/">Zpět domů</Link>
        </Button>
      </div>
    </Container>
  );
}
