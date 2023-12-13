import Image from "next/image";
import Article from "../article";
import Link from "next/link";
import { articles } from "@/app/lib/data";
import { bricolageGrotesque } from "../fonts";

const Articles = () => {
  return (
    <section className="container mx-auto px-3 py-10">
      <Article
        heading="New Articles"
        span="and Knowledge"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
      />
      <div className="mt-10 grid grid-cols-1 gap-y-12">
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
    <article className=" rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-3 duration-500">
      <Image
        src={image}
        width={388}
        height={272}
        alt={title}
        className="w-full"
      />
      <div className="py-6 px-4">
        <span className=" inline-block text-xs text-accent-1 mb-4">{date}</span>
        <h3
          className={`${bricolageGrotesque.className} text-xl font-extrabold text-accent-2 mb-3`}
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
