import Link from "next/link";
import { bricolageGrotesque } from "./fonts";
import XIcon from "./icons/x-icon";
import InstagramIcon from "./icons/instagram-icon";
import FacebookIcon from "./icons/facebook-icon";
import YoutubeIcon from "./icons/youtube-icon";
import { navLinks } from "../lib/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" bg-accent-2 text-white py-12">
      <div className=" container mx-auto px-3 sm:px-6 xl:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 sm:gap-x-8 xl:gap-x-10 gap-y-10">
        <div className="row-start-4 sm:row-start-2 lg:row-start-1 lg:col-span-2">
          <Link
            href="/"
            className={`${bricolageGrotesque.className} text-xl font-semibold inline-block mb-5`}
          >
            Ever<span className="text-accent-1">Green</span>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
            amet neque tortor.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <XIcon />
            <InstagramIcon />
            <FacebookIcon />
            <YoutubeIcon />
          </div>
        </div>
        <div className="lg:col-span-2 lg:justify-self-center">
          <h3
            className={`${bricolageGrotesque.className} text-lg font-semibold mb-4 lg:mb-6`}
          >
            Quick Links
          </h3>
          <ul className=" space-y-3 lg:space-y-4">
            {navLinks.map(({ id, name, href }) => (
              <li key={id}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h3
            className={`${bricolageGrotesque.className} text-lg font-semibold mb-4 lg:mb-6`}
          >
            Contact Us
          </h3>
          <ul className="space-y-3 lg:space-y-4">
            <li className="flex items-center gap-3">
              <Image src="/message.png" width={17} height={16} alt="message" />
              <a href="mailto:hello@website.com" className="">
                hello@website.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Image
                src="/location.png"
                width={24}
                height={20}
                alt="location"
              />
              <address className="not-italic">
                Riverside Building, County Hall, London SE1 7PB, United Kingdom
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/phone.png" width={17} height={16} alt="phone" />
              <a href="tel:451-484-5939" className="">
                451-484-5939
              </a>
            </li>
          </ul>
        </div>
        <div className="row-start-1 sm:row-start-2 sm:col-start-2 lg:row-start-1 lg:col-start-7 lg:col-span-3">
          <h3
            className={`${bricolageGrotesque.className} text-lg font-semibold mb-5 lg:mb-6`}
          >
            Newsletter
          </h3>

          <form
            action=""
            className="h-14 w-full flex items-center rounded-2xl overflow-hidden shadow-lg"
          >
            <input
              type="email"
              placeholder="Enter your email "
              className="w-full h-14 px-3"
            />
            <button className="h-14 p-4 bg-accent-1 font-bold shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
