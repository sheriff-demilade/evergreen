import Image from "next/image";
import Article from "../article";
import { bricolageGrotesque } from "../fonts";
import { ReasonsToCooseUs } from "@/app/lib/data";

const ChooseUs = () => {
  return (
    <section className="container mx-auto px-3 sm:px-6 xl:px-8 py-10 lg:py-14 xl:py-16 grid grid-cols-1 md:grid-cols-5 gap-y-11 md:gap-x-8 lg:gap-x-12">
      <Image
        src="/choose-us-mobile.png"
        width={437}
        height={404}
        alt="A garden"
        className="block md:hidden w-full  rounded-xl"
      />
      <Image
        src="/choose-us-desktop.png"
        width={446}
        height={776}
        alt="A garden"
        className="hidden md:block w-full h-full rounded-xl md:col-start-4 md:col-span-2"
      />
      <div className=" md:row-start-1 md:col-start-1 md:col-span-3">
        <Article
          heading="Why Choose"
          span="Us?"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget auctor."
          className="mb-8 xl:mb-11"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 sm:gap-8 gap-y-6 sm:gap-y-6 xl:gap-y-12">
          {ReasonsToCooseUs.map((reasonsToCooseUs) => (
            <ReasonsToCooseUsCard
              key={reasonsToCooseUs.id}
              {...reasonsToCooseUs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ReasonsToCooseUsCardProps = {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
};

const ReasonsToCooseUsCard = ({
  icon,
  title,
  description,
  href,
}: ReasonsToCooseUsCardProps) => {
  return (
    <div className="flex gap-4 lg:gap-5  items-center">
      <Image
        src={icon}
        width={48}
        height={48}
        className=" inline-block"
        alt={title}
      />
      <div className="">
        <h3
          className={`${bricolageGrotesque.className} text-lg font-semibold text-accent-2 mb-2`}
        >
          {title}
        </h3>

        <p className="mb-2">{description}</p>
        <a
          href={href}
          className="inline-block text-accent-1 active:text-accent-shade duration-300"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};

export default ChooseUs;
