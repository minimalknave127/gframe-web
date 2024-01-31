import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => (
  <div className={cn(["container w-full", props.className])}>
    {props.children}
  </div>
);
