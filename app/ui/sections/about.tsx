import Image from "next/image";
import Article from "../article";
import { ratings } from "@/app/lib/constants";
import Rating from "../rating";

const About = () => {
  return (
    <section className="container mx-auto px-3 py-10">
      <Article
        heading="Landscape Design "
        span="Beyond Expectations"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
      />

      <div className="mt-9 rounded-lg overflow-hidden">
        <Image
          src="/about-image.png"
          width={1244}
          height={360}
          alt="A mansion in the garden"
          className="w-full"
        />
        <ul className="py-4 px-2 grid grid-cols-4 text-center text-white bg-accent-2">
          {ratings.map(({ id, title, rating }) => (
            <Rating key={id} title={title} rating={rating} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
