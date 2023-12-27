import Hero from "@/components/design/Hero";
import Nav from "@/components/design/Nav";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const AnimatedGradientBlob = () => {
  return (
    <div className="w-64 h-64 rounded-full bg-gradient-to-r animate-pulse from-pink-500 via-red-500 to-yellow-500"></div>
  );
};

export { AnimatedGradientBlob };

const ExpressCheckout = () => {
  return (
    <div
      className="border-[1px] border-zinc-800 flex  space-x-8 flex-row justify-between items-center p-6 text-white bg-gradient-to-br from-blue-900/30 via-orange-900/20 to-black rounded-lg max-md:max-w-full max-md:mt-10 max-md:px-5 w-md:full"
      data-v0-t="card"
    >
      <div className="text-left">
        <h2 className="text-xl md:text-2xl font-semibold">Express Checkout</h2>
        <p className="text-md md:text-lg text-zinc-400">Get your passes.</p>
      </div>
      <Link
        className="flex items-center bg-white text-black p-2 rounded-md space-x-2"
        href="/buy"
      >
        <span className="text-md tracking-wider font-semibold font-grotesk uppercase md:text-lg">Buy</span>
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

      <div className="text-white text-2xl self-center mt-20 max-md:max-w-full max-md:mt-10">
        a harmonic junction in A VOID
      </div>
      <div
        className="text-stone-400 text-2xl self-center max-md:max-w-full -mt-3"
        style={{ transform: "rotateX(180deg)" }}
      >
        a harmonic junction in A VOID
      </div>

      <div className="text-stone-400 text-2xl self-center whitespace-nowrap mt-14 max-md:mt-10">
        STARRING TRILL BILL
      </div>
      <div
        className="blob absolute -top-20 -left-20 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-orange-500/40 to-sky-900/20 mix-blend-difference
                  blur-2xl filter sm:right-0 lg:h-[24rem] lg:w-[48rem]"
      />

      <div
        className="blob absolute -bottom-20 -right-20 -z-10 h-96 w-96 rounded-full bg-gradient-to-b from-purple-500/40 dark:from-purple-500/30 via-blue-900/20 to-sky-800/20 mix-blend-difference
                  blur-2xl filter sm:right-0 lg:h-[48rem] lg:w-[48rem]"
      />
    </div>
  );
}
