import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export default function MainPost({ post }) {
  return (
    <Link href={`/blog/${post.slug?.current}`}>
      <div>
        {/* <div>{JSON.stringify(post, undefined, 2)}</div> */}
        <div className="relative h-[80vh] max-h-[500px] w-full overflow-hidden rounded-2xl">
          <Image
            alt="Obrázek blogu"
            fill
            src={urlFor(post.mainImage).url()}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-11 flex justify-between">
          <div>
            <h3 className="text-3xl font-bold text-primary">
              Novinky ze světa GFrame
            </h3>
            <p className="text-lg">
              {new Date(post._createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {post.author.image && (
              <div className="relative w-[45px] h-[45px] border rounded-full overflow-hidden">
                <Image
                  alt={post.author.name}
                  className="object-cover w-full h-full"
                  fill
                  src={urlFor(post.author.image).url()}
                />
              </div>
            )}
            <span className="font-dmsans font-medium text-lg">
              {post.author.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
