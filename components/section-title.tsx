import { cn } from "@/lib/utils";

export default function SectionTitle({
  title,
  description,
  vertical = false,
  center,
}: {
  title: string;
  description?: string;
  vertical?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={cn([
        "flex flex-col md:flex-row md:mb-20 mb-10",
        vertical && "md:flex-col",
        center && "items-center",
      ])}
    >
      <h2
        className={cn([
          "md:text-5xl text-2xl font-bold mb-5 md:mb-0 md:flex-1",
          vertical && "md:mb-10",
          center && "text-center",
        ])}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn([
            "md:text-xl text-base md:flex-1 text-gray-700",
            center && "text-center",
          ])}
        >
          {description}
        </p>
      )}
    </div>
  );
}
