import { allBlogs } from "contentlayer/generated";

import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import StyledLists from "@/components/StyledLists";

export const metadata: Metadata = {
  title: "Arth's Blog",
  description:
    "My thoughts on things I find interesting. I write about development, design, music, and random experiences.",
};

export default function Blogs() {
  return (
    <section>
      <div className="mx-8 py-8 max-w-8xl mb-10 lg:gap-x-8">
        <h2 className="lg:mt-16 mt-8 lg:mx-auto md:max-w-4xl lowercase text-6xl font-serif font-bold tracking-tight">
          Blog Posts
        </h2>
        <div className="mt-16 lg:mx-auto md:max-w-4xl">
          <div className="mb-5">
            {allBlogs
              .sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                  return -1;
                }
                return 1;
              })
              .map((post) => (
                <Link
                  href={`/blogs/${post.slug}`}
                  key={post.slug}
                  className="md:text-3xl text-2xl lowercase font-serif font-bold text-black tracking-tight link-underline link-underline-black"
                >
                  {post.title}
                </Link>
              ))}
          </div>

          <hr className="border-neutral-200 dark:border-neutral-800 w-1/2" />

          <div className="mt-5">
            <p className="text-2xl text-zinc-700 tracking-tight">
              A blog for my thoughts on things I find interesting. You’ll find
              me writing on development, design, music, and random experiences.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
