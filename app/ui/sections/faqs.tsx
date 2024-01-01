import Image from "next/image";
import Article from "../article";
import { faqs } from "@/app/lib/data";

const Faqs = () => {
  return (
    <section className="container mx-auto px-3 sm:px-6 xl:px-8 py-10 lg:py-14 xl:py-16">
      <Article
        heading="Frequently Asked"
        span="Questions"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
        className="md:text-center md:max-w-lg md:mx-auto"
      />
      <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-9 xl:gap-x-10 xl:gap-y-12">
        {faqs.map((faq) => (
          <FaqCard key={faq.id} {...faq} />
        ))}
      </div>
    </section>
  );
};

type FaqCardProps = { icon: string; question: string; answer: string };

const FaqCard = ({ icon, question, answer }: FaqCardProps) => {
  return (
    <div className="flex items-start py-6 px-3 rounded-xl shadow-md hover:shadow-lg duration-300">
      <Image
        src={icon}
        width={32}
        height={32}
        alt="Queation mark icon"
        className="mt-1"
      />
      <div className="pl-3">
        <h3 className="text-lg leading-6 font-semibold text-accent-2  mb-3">
          {question}
        </h3>
        <p className="">{answer}</p>
      </div>
    </div>
  );
};

export default Faqs;
