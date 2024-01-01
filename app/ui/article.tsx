import { bricolageGrotesque } from "./fonts";

type ArticleProps = {
  heading: string;
  span: string;
  paragraph: string;
  className?: string;
};

const Article = ({ heading, span, paragraph, className }: ArticleProps) => {
  return (
    <article className={`${className}`}>
      <h2
        className={`${bricolageGrotesque.className} text-3xl md:text-4xl font-bold text-accent-2 mb-3`}
      >
        {heading} <span className="text-accent-1">{span}</span>
      </h2>
      <p className="leading-normal">{paragraph}</p>
    </article>
  );
};

export default Article;
