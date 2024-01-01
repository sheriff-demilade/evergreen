"use client";

import Link from "next/link";
import { bricolageGrotesque } from "./fonts";
import { useState } from "react";
import LinkButton from "./link-button";
import { navLinks } from "../lib/data";
import CloseIcon from "./icons/close-icon";
import MenuIcon from "./icons/menu-icon";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((prev) => !prev);

  return (
    <header className="fixed w-full bg-accent-2 text-white z-20 shadow-md">
      <div className="h-12 lg:h-14 container mx-auto px-3 flex gap-3 lg:justify-between items-center">
        <MobileNavButton
          isNavOpen={isNavOpen}
          toggleIsNavOpen={toggleIsNavOpen}
        />

        <Link
          href="/"
          className={`${bricolageGrotesque.className} text-xl lg:text-2xl lg:font-bold font-semibold`}
        >
          Ever<span className="text-accent-1">Green</span>
        </Link>

        <Navigation isNavOpen={isNavOpen} toggleIsNavOpen={toggleIsNavOpen} />

        <LinkButton href="/" variant="login" customStyles=" max-lg:ml-auto">
          Login
        </LinkButton>
      </div>
    </header>
  );
};

// Navgation Sub-Component
type NavigationProps = {
  isNavOpen: boolean;
  toggleIsNavOpen: () => void;
};

const Navigation = ({ isNavOpen, toggleIsNavOpen }: NavigationProps) => {
  return (
    <nav
      className={`${
        isNavOpen
          ? ""
          : "opacity-0 -translate-x-full pointer-events-none invisible"
      } lg:opacity-100 lg:translate-x-0 lg:pointer-events-auto lg:visible duration-500 ease-in-out w-52 lg:w-auto top-12 lg:top-auto left-0 lg:left-auto absolute lg:relative p-6 lg:p-0 pl-4 rounded-br-md bg-accent-2 shadow-md lg:shadow-none`}
    >
      <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 text-lg lg:text-base">
        {navLinks.map(({ id, name, href }) => (
          <li key={id}>
            <Link
              href={href}
              onClick={toggleIsNavOpen}
              className=" hover:text-accent-1 active:text-accent-1"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// MobileNavButton Sub-Component
type MobileNavButtonProps = {
  isNavOpen: boolean;
  toggleIsNavOpen: () => void;
};

const MobileNavButton = ({
  isNavOpen,
  toggleIsNavOpen,
}: MobileNavButtonProps) => {
  return (
    <button onClick={toggleIsNavOpen} className="text-accent-1 lg:hidden">
      {isNavOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};

export default Header;
