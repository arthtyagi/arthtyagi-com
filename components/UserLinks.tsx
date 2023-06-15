import Image from "next/image";

import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function UserLinks() {
  return (
    <div className="flex flex-row justify-center mt-10 space-x-5">
      <a href="https://www.instagram.com/jeezarth/" target="_blank">
        <Image
          src="/icons/instagram.svg"
          width={32}
          height={32}
          alt="Instagram"
        />
      </a>
      <a href="https://www.linkedin.com/in/arthtyagi" target="_blank">
        {" "}
        <Image
          src="/icons/linkedin.svg"
          width={32}
          height={32}
          alt="LinkedIn"
        />
      </a>
      <a href="https://twitter.com/arthtyagi" target="_blank">
        {" "}
        <Image src="/icons/twitter.svg" width={32} height={32} alt="Twitter" />
      </a>
      <a href="https://github.com/arthtyagi" target="_blank">
        {" "}
        <Image src="/icons/github.svg" width={32} height={32} alt="Github" />
      </a>
      <a href="mailto:arth@arthtyagi.com" target="_blank">
        {" "}
        <EnvelopeIcon className="h-8 w-8 stroke-black stroke-2" />
      </a>
    </div>
  );
}
