import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const Section = forwardRef(
  (
    props: {
      children: React.ReactNode;
      className?: string;
      id?: any;
    },
    ref: any
  ) => (
    <section
      {...props}
      className={cn(["mt-[102px] md:mt-[172px]  w-full", props.className])}
      ref={ref}
    >
      {props.children}
    </section>
  )
);
export default Section;
