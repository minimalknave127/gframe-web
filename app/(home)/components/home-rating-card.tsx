import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HomeRatingCard({ className }: { className?: string }) {
  return (
    <div
      className={cn([
        "bg-stone-50 border border-stone-400 px-4 py-2 rounded-full w-fit flex items-center gap-2",
        className,
      ])}
    >
      <div className="flex">
        <Image
          className="w-8 h-8 rounded-full"
          alt="face"
          src="/faces/face1.png"
          width={32}
          height={32}
        />
        <Image
          className="w-8 h-8 rounded-full -ms-4"
          alt="face"
          src="/faces/face2.png"
          width={32}
          height={32}
        />
        <Image
          className="w-8 h-8 rounded-full -ms-4"
          alt="face"
          src="/faces/face3.png"
          width={32}
          height={32}
        />
      </div>
      <div className="flex items-center gap-1">
        <Image src="/svg/star.svg" alt="star icon" width={19} height={19} />
        <div className="font-semibold">5</div>
      </div>
    </div>
  );
}
