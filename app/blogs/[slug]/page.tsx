import type { Metadata } from "next";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Mdx";
import Link from "next/link";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://arthtyagi.com${image}`
    : `https://arthtyagi.com/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://arthtyagi.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogPage({ params }: Params) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <section>
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>
      <div className="mx-8 py-8 max-w-8xl mb-10 lg:gap-x-8">
        <Link className="text-2xl md:max-w-4xl font-serif text-black
         tracking-tight link-underline link-underline-black" href="/blogs">
          ← Back
        </Link>
        <h2 className="lg:mt-16 mt-8 lg:mx-auto md:max-w-4xl lowercase text-6xl font-serif font-bold tracking-tight">
          {post.title}
        </h2>
        <h3 className="items-center lg:mx-auto mt-4 mb-8 font-mono text-sm md:max-w-4xl">
          {post.publishedAt}
        </h3>
        <div className="mt-16 lg:mx-auto md:max-w-4xl">
          <Mdx code={post.body.code} />
        </div>
      </div>
    </section>
  );
}
