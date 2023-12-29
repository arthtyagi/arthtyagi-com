"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Explore", href: "/buy" },
  { name: "Shop", href: "/demo" },
  { name: "Invite", href: "/sell" },
];

const userNavigation = [
  { name: "Buy", href: "/buy" },
  { name: "Sell", href: "/sell" },
  { name: "Products", href: "/products" },
];

export default function Nav() {
  return (
    <header className="font-triumph inset-x-0 top-0 z-50 fixed  md:bg-transparent backdrop-blur-md rounded-sm">
      <nav
        className="flex items-center justify-center md:justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Rendezvous</span>

            <p className="lg:text-2xl font-bold uppercase text-white">
              Rendezvous
            </p>
          </Link>
        </div>

        <div className="hidden font-bold font-grotesk lg:flex lg:gap-x-12 xl:gap-x-20 bg-black p-2 px-6 border-[1px] border-zinc-800 rounded-full">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="uppercase text-md leading-6 text-white duration-300 hover:text-zinc-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="flex text-md rounded-lg leading-6 bg-white
             p-2 border-[1px] border-zinc-800 py-2 px-4 text-zinc-900 hover:bg-zinc-950 hover:text-zinc-100 duration-300"
          >
           <span className="mt-[0.35rem]"> RSVP</span>
            <span aria-hidden="true">
              <ArrowUpRightIcon className="mt-[0.15rem] ml-1 h-6 w-4 stroke-2" />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
