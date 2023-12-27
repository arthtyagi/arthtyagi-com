"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "/#product" },
  { name: "Contact", href: "mailto:founders@getrentzy.com" },
];

export default function Nav() {
  let navItems = navigation;

  return (
    <div className="flex flex-col items-stretch pt-7 pb-12 px-20 max-md:px-5">
      <Link
        href="/"
        className="text-black text-3xl font-black max-md:max-w-full max-md:mr-0.5"
        aria-label="Logo"
      >
        ARTH
      </Link>
      <nav className="bg-black tracking-tighter font-medium flex w-full items-stretch justify-between gap-5 mt-5 px-3 py-2.5 max-md:max-w-full max-md:flex-wrap max-md:mr-0.5">
        <div className="flex items-stretch  justify-between gap-5">
          <Link
            href="/music"
            className="text-white text-md hover:text-orange-200 duration-300 sm:text-xl self-start"
          >
            music
          </Link>
          <Link
            href="/design"
            className="text-white text-md hover:text-orange-200 duration-300 sm:text-xl self-start"
          >
            design
          </Link>
          <Link
            href="/products"
            className="text-white text-md hover:text-orange-200 duration-300 sm:text-xl self-start"
          >
            products
          </Link>
        </div>
        <Link
          href="/book"
          className="text-white text-md hover:text-orange-200 duration-300 sm:text-xl self-start"
          aria-label="Book a service"
        >
          book a service
        </Link>
      </nav>
    </div>
  );
}
