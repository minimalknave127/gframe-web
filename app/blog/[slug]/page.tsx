import { Container } from "@/components/container";
import { client, urlFor } from "@/lib/sanity";
import { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { block } from "@/components/portable-text/blocks";
import { marks } from "@/components/portable-text/marks";

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
  return (
    <Container className="max-w-[680px]">
      <div className="flex flex-col gap-10">
        <h1 className="xl:text-[60px] md:text-4xl text-3xl font-bold">
          {post.title}
        </h1>
        <div>
          <div className="flex items-center gap-3">
            {post.author.image && (
              <div className="relative w-[28px] h-[28px] md:w-[45px] md:h-[45px] border rounded-full overflow-hidden">
                <Image
                  alt={post.author.name}
                  className="object-cover w-full h-full"
                  fill
                  src={urlFor(post.author.image).url()}
                />
              </div>
            )}
            <span className="font-dmsans font-medium md:text-lg">
              {post.author.name}
            </span>
          </div>
          <p className="md:text-lg mt-2">
            {new Date(post._createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="relative h-[300px] border md:h-[80vh] max-h-[500px] w-full overflow-hidden rounded-2xl">
          <Image
            alt="Obrázek blogu"
            fill
            src={urlFor(post.mainImage).url()}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-20">
        <PortableText components={{ block, marks }} value={post.body} />
      </div>
    </Container>
  );
}
