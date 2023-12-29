import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="font-triumph self-stretch mt-20 max-lg:max-w-full max-lg:mt-10 max-lg:pr-5">
      <div className="gap-5 flex justify-center max-lg:flex-col max-lg:items-stretch max-lg:gap-0">
        <div className="flex flex-col items-center max-lg:w-full max-lg:ml-0">
          <div className="flex grow flex-col items-stretch mt-5 max-lg:mt-10">
            <div className="border bg-[linear-gradient(180deg,rgba(139,139,139,0.15)_0%,rgba(255,54,0,0.05)_100%)] flex flex-col justify-center items-center px-8 py-7 rounded-2xl border-zinc-800 max-md:px-5">
              <Image width={330} height={330} src={"/powder.png"} alt="" />
            </div>
            <div className="text-white font-triumph lg:text-2xl self-center whitespace-nowrap mt-11 max-md:mt-10">
              STICKY LIKE POWDER
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch mt-5 max-md:mt-10">
            <div className="border bg-[linear-gradient(180deg,rgba(139,139,139,0.15)_0%,rgba(255,54,0,0.05)_100%)] flex flex-col justify-center items-center px-14 py-5 rounded-2xl border-zinc-800 max-md:px-5">
              <Image width={330} height={330} src={"/lucy.png"} alt="" />
            </div>
            <div className="text-white lg:text-2xl self-center whitespace-nowrap mt-11 max-md:mt-10">
              TRIPPY LIKE LUCY
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch mt-5 max-md:mt-10">
            <div className="border bg-[linear-gradient(180deg,rgba(139,139,139,0.15)_0%,rgba(255,54,0,0.05)_100%)] flex flex-col justify-center items-center px-14 py-5 rounded-2xl border-zinc-800 max-md:px-5">
              <Image width={330} height={330} src={"/movie.png"} alt="" />
            </div>
            <div className="text-white lg:text-2xl self-center whitespace-nowrap mt-11 max-md:mt-10">
              MAKE IT A MOVIE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
