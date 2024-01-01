import Image from "next/image";
import Article from "../article";
import Link from "next/link";
import { articles } from "@/app/lib/data";
import { bricolageGrotesque } from "../fonts";

const Articles = () => {
  return (
    <section className="container mx-auto px-3 sm:px-6 xl:px-8 py-10 lg:py-12 xl:py-16">
      <Article
        heading="New Articles"
        span="and Knowledge"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
        className="md:text-center md:max-w-lg md:mx-auto"
      />
      <div className="mt-10 lg:mt-12 xl:mt-14 grid justify-items-center grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:gap-x-8 gap-y-12 lg:gap-x-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </section>
  );
};

type ArticleCardProps = {
  image: string;
  date: string;
  title: string;
  description: string;
  href: string;
};

const ArticleCard = ({
  image,
  date,
  title,
  description,
  href,
}: ArticleCardProps) => {
  return (
    <article className=" max-w-xs rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-3 duration-500">
      <Image
        src={image}
        width={388}
        height={272}
        alt={title}
        className="w-full"
      />
      <div className="py-6 lg:py-8 px-4 lg:px-6">
        <span className=" inline-block text-xs text-accent-1 mb-4">{date}</span>
        <h3
          className={`${bricolageGrotesque.className} text-xl xl:text-2xl font-extrabold text-accent-2 mb-3`}
        >
          {title}
        </h3>
        <p className=" mb-4">{description}</p>
        <Link href={href} className=" text-accent-1 font-medium">
          Read more...
        </Link>
      </div>
    </article>
  );
};

export default Articles;
