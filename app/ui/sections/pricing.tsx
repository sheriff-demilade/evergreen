import { PricingPackages } from "@/app/lib/data";
import Article from "../article";
import LinkButton from "../link-button";
import Image from "next/image";

const Pricing = () => {
  return (
    <section className="container mx-auto px-3 sm:px-6 xl:px-8 py-10 lg:py-14 xl:py-16 ">
      <Article
        heading="Pricing"
        span="Table"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut volutpat tincidunt eget at felisioj,"
        className="md:text-center md:max-w-lg md:mx-auto mb-10 lg:mb-12"
      />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-14">
        {PricingPackages.map((pricingPackage) => (
          <PackageCard key={pricingPackage.id} {...pricingPackage} />
        ))}
      </div>
    </section>
  );
};

type FeatrueType = {
  id: string;
  title: string;
  icon: string;
};

type PackageCardProps = {
  packageName: string;
  title: string;
  price: number;
  features: FeatrueType[];
  href: string;
  primaryColor: string;
  secondaryColor: string;
};

const PackageCard = ({
  packageName,
  title,
  price,
  features,
  href,
  primaryColor,
  secondaryColor,
}: PackageCardProps) => {
  return (
    <div className="text-white max-w-xs flex-grow">
      <div
        className={`bg-${secondaryColor} w-3/4 mx-auto py-2 font-semibold text-center bg-accent-1 rounded-t-2xl`}
      >
        {packageName}
      </div>
      <div className={`bg-${primaryColor}  rounded-2xl overflow-hidden`}>
        <div className="p-6 border-b">
          <p className=" text-lg font-semibold mb-3">{title}</p>
          <p className="text-3xl font-bold mb-2">{price}.00</p>
          <span className="text-xs">/Per month</span>
        </div>
        <div className="p-6">
          <ul className="mb-6 space-y-3">
            {features.map((feature) => (
              <FeaturesItem key={feature.id} {...feature} />
            ))}
          </ul>
          <LinkButton
            href={href}
            variant="white"
            customStyles={`text-${primaryColor} w-full`}
          >
            Purchase
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
};

const FeaturesItem = ({ title, icon }: FeatureItemProps) => {
  return (
    <li className="flex items-center gap-3 pb-3 border-b">
      <Image src={icon} width={20} height={20} alt={title} />{" "}
      <span>{title}</span>
    </li>
  );
};

export default Pricing;
