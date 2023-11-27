import Image from "next/image";
import { bricolageGrotesque } from "../fonts";
import LinkButton from "../link-button";
import JoinedUsers from "../joined-users";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 gap-9 pb-12">
      <Image
        src="/hero-mobile.png"
        alt="Hero image"
        width={653}
        height={500}
        className=""
      />
      <div className="container mx-auto px-3">
        <h1
          className={`${bricolageGrotesque.className} text-4xl font-extrabold text-accent-2 mb-4`}
        >
          Crafting <span className=" text-accent-1">Green</span> Masterpieces
        </h1>
        <p className="leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
          et ex volutpat tincidunt eget at felis vivamus hendrerit suscipit
          egestas consectetur adipiscing elit.
        </p>

        <div className="flex gap-4 mt-9 mb-12">
          <LinkButton href="/" variant="accent-1">
            Get Started
          </LinkButton>
          <LinkButton href="/" variant="accent-2">
            Learn More
          </LinkButton>
        </div>

        <JoinedUsers />
      </div>
    </section>
  );
};

export default Hero;
