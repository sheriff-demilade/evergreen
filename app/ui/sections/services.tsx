import Image from "next/image";
import Article from "../article";
import { bricolageGrotesque } from "../fonts";
import { services } from "@/app/lib/data";

const Services = () => {
  return (
    <section className="container mx-auto px-3 sm:px-6 xl:px-8 py-10 lg:py-14 xl:py-16">
      <Article
        heading="Our"
        span="Services"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
        className="md:text-center md:max-w-lg md:mx-auto"
      />
      <div className=" mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-y-8 md:gap-y-11 xl:gap-x-10">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

type ServiceCardProps = {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
};

const ServiceCard = ({ icon, title, description, href }: ServiceCardProps) => {
  return (
    <div className="relative py-5 pl-10 pr-3 ml-6 rounded-lg shadow-md hover:shadow-lg duration-300">
      <Image
        src={icon}
        width={48}
        height={48}
        className=" absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-accent-2 p-2 rounded-xl shadow-md"
        alt={title}
      />
      <h3
        className={`${bricolageGrotesque.className} text-lg font-semibold text-accent-2 mb-3`}
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
  );
};

export default Services;
