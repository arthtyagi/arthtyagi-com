import Hero from "@/components/design/Hero";
import Nav from "@/components/design/Nav";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const ExpressCheckout = () => {
  return (
    <div
      className="border-[1px] hover:bg-purple-900/20 duration-500 border-zinc-800 flex space-x-12 flex-row justify-between
      items-center p-6 text-white bg-black/30 backdrop-blur-2xl
      rounded-2xl md:max-w-full md:mt-0 mt-10 md:px-10"
      data-v0-t="card"
    >
      <div className="text-left">
        <h2 className="text-xl md:text-2xl font-semibold">Express Checkout</h2>
        <p className="text-md md:text-lg text-zinc-400">Get your passes.</p>
      </div>
      <Link
        className="flex font-triumph uppercase items-center bg-white hover:bg-black/50 hover:backdrop-blur-xl
         hover:text-white duration-300 border-zinc-800 border-[1px]
         text-black p-2 px-4 rounded-md space-x-2"
        href="/buy"
      >
        <span className="text-md mt-[0.36rem] md:text-lg">Buy</span>
        <CreditCardIcon className="md:h-6 md:w-6 h-4 w-4" />
      </Link>
    </div>
  );
};

export default function Design() {
  return (
    <div className="bg-black flex flex-col pl-9 pr-10 pt-12 pb-7 max-md:px-5 isolate sm:py-24 py-12">
      <Nav />
      <Hero />

      <div className=" mx-auto sm:py-36 py-12">
        <ExpressCheckout />
      </div>

      <div className="font-triumph text-white md:text-2xl self-center md:max-w-full mt-10">
        a harmonic junction in A VOID
      </div>
      <div
        className="font-triumph text-stone-500 md:text-2xl self-center md:max-w-full md:-mt-6 -mt-5"
        style={{ transform: "rotateX(180deg)" }}
      >
        a harmonic junction in A VOID
      </div>

      <div className="z-50 font-triumph text-zinc-200 text-sm self-center whitespace-nowrap mt-14 max-md:mt-10">
        STARRING TRILL BILL
      </div>

      <div
        className="blob fixed -top-20 -left-20 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-orange-500/40 to-sky-900/20 mix-blend-difference
                  blur-2xl filter sm:right-0 lg:h-[24rem] lg:w-[48rem]"
      />

      <div
        className="blob fixed -bottom-20 -right-20 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-purple-500/40 dark:from-purple-500/30 via-blue-900/20 to-sky-800/20 mix-blend-difference
                  blur-2xl filter sm:-right-24 lg:h-[48rem] lg:w-[48rem]"
      />

      <div
        className="blob fixed top-1/2 left-1/6 -z-10 h-96 w-96 rounded-full bg-gradient-to-br from-orange-900/40 dark:from-sky-500/30 via-blue-900/20 to-amber-800/40 mix-blend-difference
                  blur-2xl filter  lg:h-[48rem] lg:w-[48rem]"
      />

      <div className="-z-10 fixed sm:-bottom-10 sm:-left-10 -bottom-5 -left-5">
        <Image
          width={320}
          height={320}
          src="/trippy.png"
          alt="Description of image"
          objectFit="cover"
          className=" hover:filter hover:grayscale duration-500 "
          layout="responsive"
          sizes="(max-width: 1080px) 50vw, 30vw"
        />
      </div>

      <div className="-z-10 fixed bottom-0 right-0">
        <Image
          width={320}
          height={320}
          src="/alien.png"
          alt="Description of image"
          className="hover:filter hover:grayscale duration-500"
          objectFit="cover"
          layout="responsive"
          sizes="(max-width: 1080px) 50vw, 30vw"
        />
      </div>
      {/* Vertical text at the bottom right */}
      <div className="fixed bottom-10 font-triumph right-0  transform translate-y-1/2 rotate-90 bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
        Arth
      </div>
    </div>
  );
}
