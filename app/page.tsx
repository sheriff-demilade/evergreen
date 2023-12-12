import About from "./ui/sections/about";
import ChooseUs from "./ui/sections/choose-us";
import Gallery from "./ui/sections/gallery";
import Hero from "./ui/sections/hero";
import Pricing from "./ui/sections/pricing";
import Services from "./ui/sections/services";

export default function Home() {
  return (
    <main className="pt-12">
      <Hero />
      <About />
      <ChooseUs />
      <Services />
      <Pricing />
      <Gallery />
    </main>
  );
}
