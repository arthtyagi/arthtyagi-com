import Image from "next/image";

export default function UserLinks() {
  return (
    <div className="flex flex-row justify-center space-x-5">
      <a href="https://www.instagram.com/jeezarth/" target="_blank">
        <Image
          src="/icons/instagram.svg"
          width={24}
          height={24}
          alt="Instagram"
        />
      </a>
      <a href="https://www.linkedin.com/in/arthtyagi" target="_blank">
        {" "}
        <Image
          src="/icons/linkedin.svg"
          width={24}
          height={24}
          alt="LinkedIn"
        />
      </a>
      <a href="https://twitter.com/arthtyagi" target="_blank">
        {" "}
        <Image src="/icons/twitter.svg" width={24} height={24} alt="Twitter" />
      </a>
      <a href="https://github.com/arthtyagi" target="_blank">
        {" "}
        <Image src="/icons/github.svg" width={24} height={24} alt="Github" />
      </a>
    </div>
  );
}
