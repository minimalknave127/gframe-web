import { PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          className="underline"
          target={target}
          rel={target === "_blank" && value?.nofollow ? "noindex nofollow" : ""}
        >
          {children}
        </a>
      );
    },
    span: () => <p>why not</p>,
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
  },
};
export const marks = components.marks;
