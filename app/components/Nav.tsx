"use client";

import { useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="flex flex-row flex-1 sm:m-5">
      <div className="flex flex-col flex-1">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-sans uppercase font-black">
          Arth
        </h1>
      </div>
      <div className="hidden sm:flex flex-col flex-1">
        {/* Navigation */}
        <nav className="flex flex-row justify-end">
          <ul className="flex flex-row space-x-5">
            <li
              className="lg:text-5xl text-3xl font-sans font-black
        duration-300 hover:text-red-600"
            >
              Blogs
            </li>
            <li
              className="lg:text-5xl text-3xl  font-sans sm:uppercase font-black
          hover:text-white hover:bg-red-600 duration-300 sm:text-white sm:bg-black"
            >
              Music
            </li>
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
            <div className="fixed inset-0 bg-red-50 bg-gradient-to-b
             flex flex-col justify-center items-center">
              {/* close button */}
              <button
                className="absolute top-5 right-5"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <XMarkIcon className="h-10 w-10" />
              </button>
              <ul className="flex flex-col space-y-10">
                <li className="text-5xl font-sans uppercase font-black">
                  Blogs
                </li>
                <li className="text-5xl font-sans uppercase font-black">
                  Music
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
