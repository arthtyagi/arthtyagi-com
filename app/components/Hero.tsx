"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-auto lg:mx-0 max-w-8xl mb-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
      <div className="mx-auto mt-16 md:max-w-2xl lg:mt-0 ">
        <h1 className="text-6xl xl:text-8xl lg:text-7xl font-serif font-bold tracking-tight">
          <Image src="/arth.png" alt="Arth Tyagi" width={200} height={200} />
          Developer, Designer, Producer
        </h1>
      </div>
      <div className="mx-auto mt-16 md:max-w-2xl lg:mt-0">
        <p className="xl:text-4xl lg:text-3xl text-2xl text-zinc-800 tracking-tight">
          I’m a developer, designer, and producer. I like creating products.
          Often, to solve a problem. Sometimes, just for fun.
        </p>

        <br />
        <p className="xl:text-4xl lg:text-3xl text-2xl text-zinc-600 tracking-tight">
          Rn, I’m working on Melodrip, an AI music curator. I produce
          psychedelic-esque trap music <i className="text-lg">(read: noise)</i>{" "}
          or write ill-produced rhymes to blow off steam.
        </p>
        <p className="text-zinc-500 text-sm xl:text-xl lg:text-lg sm:text-base mt-5 tracking-tight">
          P.S. The music link redirects to my
          <a
            className="text-orange-500 link-underline link-underline-black"
            href="https://soundcloud.com/ogtrillbill"
          >
            {" "}
            SoundCloud
          </a>{" "}
          for now. Soon, there will be a dedicated site/store. Yes, I
          drew that goofy illustration just to make an <i>art NFT</i>.
        </p>
      </div>
    </div>
  );
}
