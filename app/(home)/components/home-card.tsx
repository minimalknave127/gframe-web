"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

type FunctionCardProps = {
  title: string;
  description: string;
  image?: string;
  className?: string;
  ImageComponent?: React.FC;
};

export default function FunctionCard({
  title,
  description,
  image,
  ImageComponent,
  className = "",
}: FunctionCardProps) {
  return (
    <motion.div
      initial="stop"
      whileHover="play"
      style={{ transition: "all 3s ease-in-out" }}
      className={cn([
        "p-5 py-10 border border-slate-100 rounded-lg to-[60%] bg-gradient-to-br from-slate-50  relative overflow-hidden",
        className,
      ])}
    >
      <div className="w-full text-center h-[200px] flex justify-center items-center mb-5 relative ">
        {image && (
          <Image
            src={image}
            fill
            alt="connectivity"
            className="relative z-20 object-contain w-full h-full"
          />
        )}
        {/* <motion.div className="w-full h-full" initial="stop" whileHover="play"> */}
        {ImageComponent && <ImageComponent />}
        {/* </motion.div> */}
        {/* <div className="h-full rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] aspect-square bg-slate-100"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] h-[120%] aspect-square rounded-full bg-slate-100/40"></div> */}
      </div>
      <div className="text-2xl font-bold text-center font-dmsans">{title}</div>
      <div className="text-center text-lg text-slate-600 mt-2">
        {description}
      </div>
    </motion.div>
  );
}
