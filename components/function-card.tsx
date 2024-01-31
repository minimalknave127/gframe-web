import { cn } from "@/lib/utils";
import Image from "next/image";

export default function FunctionCard({
  title,
  content,
  className,
}: {
  title: string;
  content: string;
  className?: string;
}) {
  return (
    <div
      className={cn([
        "bg-white border border-[#D0D0D0] rounded-md p-10 flex flex-col gap-10",
        className,
      ])}
    >
      <div className="relative pb-[90%] w-full">
        <Image
          src={content}
          fill
          alt="Function illustration"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-poppins font-semibold text-center">
        {title}
      </h3>
    </div>
  );
}
