"use client";

import { useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import UserLinks from "./UserLinks";
import Link from "next/link";

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="flex flex-row flex-1 sm:m-5 m-10">
      <div className="flex flex-col flex-1">
        <Link href="/">
          <h1 className="lg:text-5xl sm:text-4xl text-3xl font-sans uppercase font-black">
            Arth
          </h1>
        </Link>
      </div>
      <div className="hidden sm:flex flex-col flex-1">
        {/* Navigation */}
        <nav className="flex flex-row justify-end">
          <ul className="flex flex-row space-x-5">
            <a
              className="lg:text-5xl text-3xl font-sans font-black
        duration-300 link-underline link-underline-black"
              href="/blogs"
            >
              Blogs
            </a>
            <a
              className="lg:text-5xl text-3xl  font-sans sm:uppercase font-black
              link-underline duration-300 sm:text-white sm:bg-black"
              href="https://soundcloud.com/ogtrillbill"
              target="_blank"
            >
              Music
            </a>
          </ul>
        </nav>
      </div>
      <div className="sm:hidden flex flex-col flex-1">
        {/* Mobile Menu */}
        <div className="flex flex-row justify-end">
          <button
            className="
         hover:text-red-600"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <Bars2Icon className="h-10 w-10" />
          </button>

          {/* cover the whole screen, white background, black text */}
          {mobileMenu && (
            <div
              className="fixed inset-0 z-50 bg-red-50
             flex flex-col justify-center items-center"
            >
              {/* close button */}
              <button
                className="absolute top-5 right-5"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <XMarkIcon className="h-10 w-10" />
              </button>
              <ul className="flex flex-col space-y-10 pb-12 uppercase">
                <a
                  className=" text-5xl font-sans font-black
        duration-300 link-underline link-underline-black"
                  href="/blogs"
                >
                  Blogs
                </a>
                <a
                  className="text-5xl font-sans sm:uppercase font-black
              link-underline duration-300 sm:text-white sm:bg-black"
                  href="https://soundcloud.com/ogtrillbill"
                  target="_blank"
                >
                  Music
                </a>
              </ul>
              <UserLinks />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
