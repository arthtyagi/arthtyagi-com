import Image from "next/image";
import Nav from "./components/Nav";
import UserLinks from "./components/UserLinks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-10">
      <Nav />
      <UserLinks />
    </main>
  );
}
