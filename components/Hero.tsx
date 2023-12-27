import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col items-stretch max-md:mt-10">
        <div
          className="border bg-white flex shrink-0 h-[269px] flex-col border-solid border-black"
          role="img"
          aria-label="Image 1"
        ></div>
        <div
          className="border bg-black flex shrink-0 h-[269px] flex-col mt-11 border-solid border-black max-md:mt-10"
          role="img"
          aria-label="Image 2"
        >
          <Link
            href="/404"
            className="flex items-center justify-center h-full text-white"
          >
            Centered Text
          </Link>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
      <Image
        height={512}
        width={512}
        src={"/hero.png"}
        className="aspect-[0.96] object-contain object-center w-full border overflow-hidden my-auto border-solid border-black max-md:max-w-full max-md:mt-10"
        alt="Image"
      />
    </div>
    <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col items-stretch max-md:mt-10">
        <div
          className="border bg-white flex shrink-0 h-[269px] flex-col border-solid border-black"
          role="img"
          aria-label="Image 3"
        ></div>
        <div
          className="border bg-black flex shrink-0 h-[269px] flex-col mt-11 border-solid border-black max-md:mt-10"
          role="img"
          aria-label="Image 4"
        ></div>
      </div>
    </div>
  </div>
  );
}
