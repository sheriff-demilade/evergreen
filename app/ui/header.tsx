"use client";

import Link from "next/link";
import MobileNavButton from "./mobile-nav-button";
import { bricolageGrotesque } from "./fonts";
import { useState } from "react";
import Navigation from "./navigation";
import LinkButton from "./link-button";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((prev) => !prev);

  return (
    <header className="fixed w-full bg-accent-2 text-white z-20 shadow-md">
      <div className="relative h-12 container mx-auto px-3 flex gap-3 items-center">
        <MobileNavButton
          isNavOpen={isNavOpen}
          toggleIsNavOpen={toggleIsNavOpen}
        />

        <Link
          href="/"
          className={`${bricolageGrotesque.className} text-xl font-semibold`}
        >
          Ever<span className="text-accent-1">Green</span>
        </Link>

        <Navigation isNavOpen={isNavOpen} toggleIsNavOpen={toggleIsNavOpen} />

        <LinkButton href="/" variant="login" customStyles="ml-auto">
          Login
        </LinkButton>
      </div>
    </header>
  );
};

export default Header;
