import Image from "next/image";
import Article from "../article";
import { gallery } from "@/app/lib/data";
import Link from "next/link";
import { bricolageGrotesque } from "../fonts";

const Gallery = () => {
  return (
    <section className=" container mx-auto px-3 sm:px-6 xl:px-8 py-10 lg:py-12 xl:py-16">
      <Article
        heading="EverGreen"
        span="Gallery"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas. Nunc eget congue ante. Vivamus ut sapien et ex volutpat tincidunt eget at felis vivamus hendrerit."
        className="md:text-center md:max-w-lg md:mx-auto"
      />
      <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7 gap-y-10 xl:gap-y-10 xl:gap-x-8">
        {gallery.map((galleryItem) => (
          <GalleryCard key={galleryItem.id} {...galleryItem} />
        ))}
      </div>
    </section>
  );
};

type GalleryCardProps = {
  img?: string;
  title?: string;
  description?: string;
  href?: string;
};

const GalleryCard = ({ img, title, description, href }: GalleryCardProps) => {
  return (
    <figure className="h-56 text-center text-white bg-accent-1 rounded-xl overflow-hidden shadow-lg hover:shadow-xl duration-500">
      {img ? (
        <Image
          src={img}
          width={388}
          height={388}
          alt="Gallery image"
          className=" w-full hover:scale-105 duration-500"
        />
      ) : (
        <div className="h-full flex flex-col items-center justify-center p-3">
          <h3
            className={`${bricolageGrotesque.className} text-lg font-semibold mb-3`}
          >
            {title}
          </h3>
          <p className="mb-3">{description}</p>
          <Link href={href || "/"} className="hover:underline duration-300">
            See more
          </Link>
        </div>
      )}
    </figure>
  );
};

export default Gallery;
