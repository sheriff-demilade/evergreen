import Image from "next/image";
import Article from "../article";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { bricolageGrotesque } from "../fonts";
import { ReasonsToCooseUs } from "@/app/lib/data";

const ChooseUs = () => {
  return (
    <section className="relative py-10">
      <Image
        src="/choose-us-mobile.png"
        width={437}
        height={404}
        alt="A garden"
        className="block w-full "
      />
      <div className=" container mx-auto px-3">
        <Article
          heading="Why Choose"
          span="Us?"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor. Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus. Vivamus accumsan diam eget auctor."
          className="mt-8 mb-11"
        />
        <div className="grid grid-cols-1 gap-y-11">
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
    <div className="">
      <Image
        src={icon}
        width={48}
        height={48}
        className=" inline-block mb-6"
        alt={title}
      />
      <div className="">
        <h3
          className={`${bricolageGrotesque.className} text-lg font-semibold text-accent-2 mb-2`}
        >
          {title}
        </h3>
        <p className="">{description}</p>
        <a
          href={href}
          className="inline-block pt-3 text-accent-1 active:text-accent-shade duration-300"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};

export default ChooseUs;
