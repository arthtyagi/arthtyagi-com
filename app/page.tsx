import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden p-10">
      <Hero />
      <Nav />
      <Nav />
      <p className="text-zinc-400 uppercase">create. create. create.</p>
      <Nav />
      <Nav />
      <p className="text-zinc-400 uppercase">Homage to Peter De Potter.</p>
      <Footer />
    </main>
  );
}
