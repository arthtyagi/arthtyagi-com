import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main >
      <Hero />
      <Nav />
      <Nav />
      <p className="text-zinc-400 uppercase">create. create. create.</p>
      <Nav />
      <Nav />
      <p className="text-zinc-400 uppercase">Homage to Peter De Potter.</p>
    </main>
  );
}
