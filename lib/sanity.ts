import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1fgauecq",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
  // useCdn: false,
  apiVersion: "2023-10-03",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};
