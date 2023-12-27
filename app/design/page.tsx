import Image from "next/image";
import Link from "next/link";
export default function Design() {
  return (
    <header className="bg-black flex flex-col pl-9 pr-10 pt-12 pb-7 max-md:px-5">
      <div className="self-stretch flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-2xl grow whitespace-nowrap my-auto">
          rendezvous
        </div>
        <div className="border self-stretch flex justify-between gap-5 px-20 py-7 rounded-[100px] border-solid border-zinc-700 items-start max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="text-white text-2xl">EXPLORE</div>
          <div className="text-white text-2xl self-stretch">shop</div>
          <div className="text-white text-2xl">INVITE</div>
        </div>
        <div className="flex-col text-black text-2xl relative whitespace-nowrap overflow-hidden self-stretch aspect-[3.1066666666666665] w-[233px] justify-center items-center px-16 py-7 max-md:px-5">
          <Link
            href="#"
            className="absolute h-full w-full object-cover object-center inset-0 bg-white rounded-xl p-4"
            aria-label="RSVP"
            role="button"
          >
           RSVP
          </Link>
        </div>
      </div>
      <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10 max-md:pr-5">
        <form>
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch mt-5 max-md:mt-10">
                <div className="border bg-[linear-gradient(180deg,rgba(139,139,139,0.15)_0%,rgba(255,54,0,0.05)_100%)] flex flex-col justify-center items-stretch px-8 py-7 rounded-[50px] border-solid border-zinc-700 max-md:px-5">
                  <Image width={400} height={400} src={"/powder.png"} alt="" />
                </div>
                <div className="text-white text-2xl self-center whitespace-nowrap mt-11 max-md:mt-10">
                  STICKY LIKE POWDER
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch mt-5 max-md:mt-10">
                <div className="border bg-[linear-gradient(180deg,rgba(139,139,139,0.15)_0%,rgba(255,54,0,0.05)_100%)] flex flex-col justify-center items-stretch px-14 py-5 rounded-[50px] border-solid border-zinc-700 max-md:px-5">
                  <Image width={400} height={400} src={"/lucy.png"} alt="" />
                </div>
                <div className="text-white text-2xl self-center whitespace-nowrap mt-11 max-md:mt-10">
                  TRIPPY LIKE lucy
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:mt-10">
                <div className="border bg-[linear-gradient(180deg,rgba(139,139,139,0.15)_0%,rgba(255,54,0,0.05)_100%)] flex flex-col justify-center items-stretch px-14 py-5 rounded-[50px] border-solid border-zinc-700 max-md:px-5">
                  <Image width={400} height={400} src={"/movie.png"} alt="" />
                </div>
                <div className="text-white text-2xl self-center whitespace-nowrap mt-6">
                  make it a movie
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="border bg-black self-center w-[699px] max-w-full mt-28 pl-12 pr-10 py-12 rounded-3xl border-solid border-neutral-600 max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
            <div className="text-white text-3xl my-auto max-md:mt-10">
              EXPRESS CHECKOUT. GET YOUR PASS
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <button
              type="button"
              className="text-white text-2xl whitespace-nowrap border bg-orange-600 bg-opacity-40 grow justify-center w-full pl-16 pr-11 py-5 rounded-3xl border-solid border-neutral-600 items-end max-md:mt-10 max-md:px-5"
              aria-label="Buy"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="text-white text-2xl self-center mt-20 max-md:max-w-full max-md:mt-10">
        a harmonic junction in A VOID
      </div>
      <div className="text-stone-400 text-2xl self-center max-md:max-w-full">
        a harmonic junction in A VOID
      </div>
      <div className="text-stone-400 text-2xl self-center whitespace-nowrap mt-14 max-md:mt-10">
        STARRING TRILL BILL
      </div>
    </header>
  );
}
