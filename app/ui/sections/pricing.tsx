import { PricingPackages } from "@/app/lib/data";
import Article from "../article";
import CheckCircleIcon from "../icons/check-circle-icon";
import LinkButton from "../link-button";

const Pricing = () => {
  return (
    <section className="container mx-auto px-3 py-10">
      <Article
        heading="Pricing"
        span="Table"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut volutpat tincidunt eget at felisioj,"
        className="mb-10"
      />

      <div className="flex flex-col gap-12">
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
    <div className="text-white">
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
            {features.map(({ id, title }) => (
              <FeaturesItem key={id} title={title} />
            ))}
          </ul>
          <LinkButton
            href={href}
            variant="white"
            customStyles="w-full text-accent-2"
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
};

const FeaturesItem = ({ title }: FeatureItemProps) => {
  return (
    <li className="flex items-center gap-3 pb-3 border-b">
      <CheckCircleIcon /> <span>{title}</span>
    </li>
  );
};

export default Pricing;
