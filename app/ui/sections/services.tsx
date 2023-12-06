import Image from "next/image";
import Article from "../article";
import { bricolageGrotesque } from "../fonts";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { services } from "@/app/lib/constants";

const Services = () => {
  return (
    <section className="container mx-auto px-3 py-10">
      <Article
        heading="Our"
        span="Services"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
      />
      <div className=" my-10 grid grid-cols-1 gap-y-8">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

type ServiceCardProps = {
  id: string;
  icon: StaticImport;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="relative p-6 pl-12 ml-8 rounded-lg shadow-md">
      <Image
        src={icon}
        width={48}
        height={48}
        className=" absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-accent-2 p-2 rounded-xl"
        alt={title}
      />
      <h3
        className={`${bricolageGrotesque.className} text-lg font-medium text-accent-2 mb-3`}
      >
        {title}
      </h3>
      <p className="">{description}</p>
    </div>
  );
};

export default Services;
