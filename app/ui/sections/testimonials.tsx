import Image from "next/image";
import Article from "../article";
import { testimonials } from "@/app/lib/data";

const Testimonials = () => {
  return (
    <section className="container mx-auto px-3 sm:px-6 xl:px-8 py-10 lg:py-14 xl:py-16">
      <Article
        heading="Listen to what our"
        span="customers say"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
        className="md:text-center md:max-w-lg md:mx-auto"
      />
      <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-y-9 xl:gap-x-10 xl:gap-y-12">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

type TestimonialCardProps = {
  image: string;
  stars: number;
  name: string;
  qoute: string;
};

const TestimonialCard = ({
  image,
  stars,
  name,
  qoute,
}: TestimonialCardProps) => {
  return (
    <blockquote className=" p-4 rounded-xl shadow-md hover:shadow-lg duration-300">
      <div className="flex gap-4 items-center mb-4">
        <Image
          src={image}
          width={56}
          height={56}
          alt={name}
          className="rounded-full"
        />
        <div>
          <h4 className=" text-base font-semibold text-accent-2 mb-1">
            {name}
          </h4>
          <div className="flex items-center gap-1">
            {[...Array(stars)].map((_, idx) => (
              <Image
                key={idx}
                src="/testimonials/star-icon.png"
                width={16}
                height={15}
                alt="Star"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="">{qoute}</p>
    </blockquote>
  );
};

export default Testimonials;
