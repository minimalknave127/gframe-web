import { client, urlFor } from "@/lib/sanity";
import { Metadata } from "next";

async function getPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
        ...,
        author->{name, image}
    }`,
    { slug: slug },
    {
      next: {
        revalidate: 1000,
      },
    }
  );
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  const mt: Metadata = {
    title: post?.seo?.title || post.title,
    description: post?.seo?.description ?? "",
    openGraph: {
      images: [urlFor(post.mainImage).url()],
      title: post?.seo?.title || post.title,
    },
    twitter: {
      images: [urlFor(post.mainImage).url()],
      title: post?.seo?.title || post.title,
    },
  };
  return mt;
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  return <div>detail blogu: {JSON.stringify(post)}</div>;
}
