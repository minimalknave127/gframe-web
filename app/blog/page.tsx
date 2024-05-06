import { Container } from "@/components/container";
import Section from "@/components/section";
import { client } from "@/lib/sanity";
import MainPost from "./components/main-post";
import Post from "./components/post";

export default async function BlogPage() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
            ...,
            author->{name, image}
        }`,
    {},
    { next: { revalidate: 1 } }
  );
  return (
    <div>
      <Container>
        <h1 className="xl:text-[80px] md:text-7xl text-4xl font-bold">
          Blog 👀
        </h1>
        <h2 className="text-lg md:text-xl mt-4 spacing tracking-normal">
          Podívejte se na novinky ze světa GFrame, tipy a triky.
        </h2>
        <Section className="mt-[40px] md:mt-[80px]">
          {posts.length > 0 ? (
            <div className="grid gap-10 xl:grid-cols-3 md:grid-cols-2">
              {posts.map((post, i) => (
                <Post key={i} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-lg">Zatím nemáme žádné příspěvky 😔</p>
          )}
        </Section>
      </Container>
    </div>
  );
}
