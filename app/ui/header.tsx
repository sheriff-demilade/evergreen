"use client";

import Link from "next/link";
import MobileNavButton from "./mobile-nav-button";
import { bricolageGrotesque } from "./fonts";
import { useState } from "react";
import Navigation from "./navigation";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((prev) => !prev);

  return (
    <header className="bg-grey text-white z-20 shadow-md">
      <div className="relative h-12 container mx-auto px-3 flex justify-between items-center">
        <Link
          href="/"
          className={`${bricolageGrotesque.className} text-xl font-semibold`}
        >
          Ever<span className="text-main">Green</span>
        </Link>

        <Navigation isNavOpen={isNavOpen} toggleIsNavOpen={toggleIsNavOpen} />

        <MobileNavButton
          isNavOpen={isNavOpen}
          toggleIsNavOpen={toggleIsNavOpen}
        />
      </div>
    </header>
  );
};

export default Header;
