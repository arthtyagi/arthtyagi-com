import Image from "next/image";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row justify-center m-10 space-x-5">
      <Link href="https://www.instagram.com/jeezarth/" target="_blank">
        <Image
          src="/icons/instagram.svg"
          width={32}
          height={32}
          alt="Instagram"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/arthtyagi" target="_blank">
        {" "}
        <Image
          src="/icons/linkedin.svg"
          width={32}
          height={32}
          alt="LinkedIn"
        />
      </Link>
      <Link href="https://twitter.com/arthtyagi" target="_blank">
        {" "}
        <Image src="/icons/twitter.svg" width={32} height={32} alt="Twitter" />
      </Link>
      <Link href="https://github.com/arthtyagi" target="_blank">
        {" "}
        <Image src="/icons/github.svg" width={32} height={32} alt="Github" />
      </Link>
      <Link href="mailto:arth@arthtyagi.com" target="_blank">
        {" "}
        <EnvelopeIcon className="h-8 w-8 stroke-black stroke-2" />
      </Link>
    </div>
  );
}
