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

      <div className="flex flex-col gap-10">
        {PricingPackages.map((pricingPackage) => (
          <PricingCard key={pricingPackage.id} {...pricingPackage} />
        ))}
      </div>
    </section>
  );
};

type FeatrueType = {
  id: string;
  featureName: string;
};

type PricingCardProps = {
  packageName: string;
  title: string;
  price: number;
  features: FeatrueType[];
  purchaseLink: string;
};

const PricingCard = ({
  packageName,
  title,
  price,
  features,
  purchaseLink,
}: PricingCardProps) => {
  return (
    <div className="bg-accent-2 text-white rounded-xl overflow-hidden">
      <div className="p-6 border-b">
        <p className="text-base font-semibold mb-3">{title}</p>
        <p className="text-3xl font-bold mb-2">{price}</p>
        <span className="text-xs">/Per month</span>
      </div>
      <div className="p-6">
        <ul className="mb-6 space-y-3">
          {features.map((feature) => (
            <FeaturesItem key={feature.id} {...feature} />
          ))}
        </ul>
        <LinkButton
          href={purchaseLink}
          variant="white"
          customStyles="w-full text-accent-2"
        >
          Purchase
        </LinkButton>
      </div>
    </div>
  );
};

type FeatureItemProps = {
  featureName: string;
};

const FeaturesItem = ({ featureName }: FeatureItemProps) => {
  return (
    <li className="flex items-center gap-3 pb-2 border-b">
      <CheckCircleIcon /> <span className="">{featureName}</span>
    </li>
  );
};

export default Pricing;
