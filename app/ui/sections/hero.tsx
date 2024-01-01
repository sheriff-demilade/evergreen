import Image from "next/image";
import { bricolageGrotesque } from "../fonts";
import LinkButton from "../link-button";
import JoinedUsers from "../joined-users";

const Hero = () => {
  return (
    <section className="relative mb-11 xl:mb-16">
      <div className="lg:container md:mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-9">
        <div className="">
          <Image
            src="/hero-mobile.png"
            alt="Hero image"
            width={653}
            height={500}
            className="w-full lg:hidden"
          />
          <div className="absolute top-0 left-0 w-1/2 h-full hidden lg:block rounded-br-2xl overflow-hidden">
            <Image
              src="/hero-mobile.png"
              alt="Hero image"
              width={653}
              height={500}
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
        <article className="container mx-auto px-3 sm:px-6 xl:px-8 md:py-16 xl:py-20">
          <h1
            className={`${bricolageGrotesque.className} text-4xl lg:text-5xl font-extrabold text-accent-2 mb-4 lg:mb-6`}
          >
            Crafting <span className=" text-accent-1">Green</span> Masterpieces
          </h1>
          <p className="leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien
            et ex volutpat tincidunt eget at felis vivamus hendrerit suscipit
            egestas consectetur adipiscing elit.
          </p>

          <div className="flex gap-4 mt-9 lg:mt-11 mb-12 lg:mb-14">
            <LinkButton href="/" variant="accent-1">
              Get Started
            </LinkButton>
            <LinkButton href="/" variant="accent-2">
              Learn More
            </LinkButton>
          </div>

          <JoinedUsers />
        </article>
      </div>
    </section>
  );
};

export default Hero;
