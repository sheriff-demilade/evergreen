import About from "./ui/sections/about";
import Hero from "./ui/sections/hero";
import Services from "./ui/sections/services";

export default function Home() {
  return (
    <main className="pt-12">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
