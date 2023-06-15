import { Metadata } from "next/types";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  // const post = allBlogs.find((post) => post.slug === params.slug);
  // if (!post) {
  //   return;
  // }

  // todo: add correct metadata

  const title = params.slug;
  const description = "Developer, Designer, Producer";
  const publishedTime = new Date().toISOString();
  const { slug } = params;
  const ogImage = `https://arthtyagi.com/api/og?title=${slug}`;

  return {
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
export default function BlogPage({ params }: { params: { slug: string } }) {
  return (
    <div className="mx-8 py-8 max-w-8xl mb-10 lg:gap-x-8">
      <h2 className="lg:mt-16 mt-8 lg:mx-auto md:max-w-4xl lowercase text-6xl font-serif font-bold tracking-tight">
        {params.slug}
      </h2>
      <div className="mt-16 lg:mx-auto md:max-w-4xl">
        <p className="text-2xl text-zinc-700 tracking-tight">
          Seems like you’ve been trying to tinker with the URL field. I admire
          your curiosity. But, I haven’t added content for my blog yet. Content
          for blog {params.slug} goes here, if it existed.
        </p>
        <br />
        <p className="text-zinc-600 text-xl mt-5 tracking-tight">
          Enjoy this clip of some music I made until I finish my blog situation.
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/87bSrkLIgvU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </p>
      </div>
    </div>
  );
}
