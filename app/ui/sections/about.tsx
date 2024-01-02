import Image from "next/image";
import Article from "../article";
import { ratings } from "@/app/lib/data";
import Rating from "../rating";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-3 sm:px-6 xl:px-8 py-10 lg:py-14 xl:py-16"
    >
      <Article
        heading="Landscape Design "
        span="Beyond Expectations"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
        className="md:text-center md:max-w-lg md:mx-auto"
      />

      <div className="mt-9 lg:mt-12 xl:mt-14 rounded-xl overflow-hidden">
        <Image
          src="/about-image.png"
          width={1244}
          height={360}
          alt="A mansion in the garden"
          className="w-full"
        />
        <ul className="py-4 md:py-7 px-2 md:px-4 grid grid-cols-4 text-center text-white bg-accent-2">
          {ratings.map((rating) => (
            <Rating key={rating.id} {...rating} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
