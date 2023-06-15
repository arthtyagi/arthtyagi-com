
export default function Blogs() {
  return (
    <div className="mx-8 py-8 max-w-8xl mb-10 lg:gap-x-8">
      <h2 className="lg:mt-16 mt-8 lg:mx-auto md:max-w-4xl lowercase text-6xl font-serif font-bold tracking-tight">
        Blog Posts
      </h2>
      <div className="mt-16 lg:mx-auto md:max-w-4xl">
        <p className="text-2xl text-zinc-700 tracking-tight">
          I’m migrating my blogs. I used to write on Notion. I built{" "}
          <a
            className="text-orange-500 link-underline link-underline-black"
            href="https://github.com/arthtyagi/serverless-notion-blog"
          >
            a serverless Notion blog
          </a>{" "}
          to use Notion as my CMS and render all the content. However, I much
          prefer writing plain markdown now. So, I’ll be using MDX and
          Contentlayer for that. I also have a tool in the works to directly
          write Markdown on my website or any other neat Markdown graphical
          interface, push the change to my repo, and autodeploy the site.
        </p>
        <br />
        <ol
          className="text-2xl text-zinc-700 tracking-tight
        list-decimal list-inside
        "
        >
          My options currently are:
          <li>
            Write in Notion and then copy-paste to my repo in a new MD file.
          </li>
          <li>Write my blog in my code editor.</li>{" "}
          <li>Write in Obsidian and move around files.</li>
        </ol>
        <br />
        <p
          className="text-2xl text-zinc-700 tracking-tight
        list-disc list-inside
        "
        >
          I might be spending way too much time thinking this as I do with most
          things but I prefer a seamless experience. I want to keep the solution
          low-overhead yet aesthetically pleasing simultaneously.
        </p>
        <br />
        <p className="text-zinc-600 text-xl mt-5 tracking-tight">
          Enjoy this clip of some music I made until then.
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
