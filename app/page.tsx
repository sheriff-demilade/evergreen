import About from "./ui/sections/about";
import Articles from "./ui/sections/articles";
import ChooseUs from "./ui/sections/choose-us";
import Faqs from "./ui/sections/faqs";
import Gallery from "./ui/sections/gallery";
import Hero from "./ui/sections/hero";
import Pricing from "./ui/sections/pricing";
import Services from "./ui/sections/services";
import Testimonials from "./ui/sections/testimonials";

export default function Home() {
  return (
    <main className="pt-12">
      <Hero />
      <About />
      <ChooseUs />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonials />
      <Faqs />
      <Articles />
    </main>
  );
}
