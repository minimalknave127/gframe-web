import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface AppCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
  action?: string;
}

export default function AppCard({
  title,
  description,
  icon,
  className,
  action,
}: AppCardProps) {
  return (
    <div
      className={cn([
        "rounded-xl p-5 gap-4 flex flex-col border border-slate-200 bg-slate-50",
        className,
      ])}
    >
      <Image
        src={`/icons/apps/${icon}.svg`}
        width={40}
        height={40}
        alt="GFrame"
      />
      <div>
        <h3 className="text-xl font-bold mb-0.5">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
      {action && (
        <Button asChild size="sm" className="w-fit" variant="link">
          <Link href={action}>Zjistit více</Link>
        </Button>
      )}
    </div>
  );
}
