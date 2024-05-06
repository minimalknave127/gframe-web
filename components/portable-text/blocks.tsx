import { PortableTextComponents } from "@portabletext/react";

export const H2 = ({ children }: { children: string }) => (
  <h2 className="text-xl md:text-2xl font-semibold mt-[2em]">{children}</h2>
);
export const H3 = ({ children }: { children: string }) => (
  <h3 className="text-lg md:text-xl font-semibold mt-[1.92em]">{children}</h3>
);
export const H4 = ({ children }: { children: string }) => (
  <h4 className="text-base md:text-lg font-semibold mt-[1.92em]">{children}</h4>
);
export const P = ({ children }: { children: string }) => (
  <p className="text-base mt-[0.86em] text-gray-800">{children}</p>
);

const components: PortableTextComponents = {
  block: {
    // @ts-ignore
    h2: H2,
    // @ts-ignore
    h3: H3,
    // @ts-ignore
    h4: H4,
    // @ts-ignore
    normal: P,
  },
};

export const block = components.block;
