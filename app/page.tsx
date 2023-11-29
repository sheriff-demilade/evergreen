import About from "./ui/sections/about";
import Hero from "./ui/sections/hero";

export default function Home() {
  return (
    <main className="pt-12">
      <Hero />
      <About />
    </main>
  );
}
