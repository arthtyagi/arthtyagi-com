import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="font-triumph self-stretch mt-20 max-md:max-w-full max-md:mt-10 max-md:pr-5">
      <div className="gap-5 flex justify-center max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-center w-[33%] max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch mt-5 max-md:mt-10">
            <div className="border bg-gradient-to-br from-amber-950/20 via-orange-950/30 to-black backdrop-blur-2xl flex flex-col justify-center items-center px-8 py-7 rounded-[50px] border-solid border-zinc-700 max-md:px-5">
              <Image width={385} height={385} src={"/powder.png"} alt="" />
            </div>
            <div className="text-white font-triumph lg:text-2xl self-center whitespace-nowrap mt-11 max-md:mt-10">
              STICKY LIKE POWDER
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch mt-5 max-md:mt-10">
            <div className="border bg-gradient-to-br from-amber-950/20 via-yellow-800/40 to-black backdrop-blur-2xl flex flex-col justify-center items-center px-14 py-5 rounded-[50px] border-solid border-zinc-700 max-md:px-5">
              <Image width={330} height={330} src={"/lucy.png"} alt="" />
            </div>
            <div className="text-white lg:text-2xl self-center whitespace-nowrap mt-11 max-md:mt-10">
              TRIPPY LIKE LUCY
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-[34%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch mt-5 max-md:mt-10">
            <div className="border bg-gradient-to-br from-amber-950/20 via-orange-800/30 to-black backdrop-blur-2xl flex flex-col justify-center items-center px-14 py-5 rounded-[50px] border-solid border-zinc-700 max-md:px-5">
              <Image width={350} height={350} src={"/movie.png"} alt="" />
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
