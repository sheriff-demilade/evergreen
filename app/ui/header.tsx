"use client";

import Link from "next/link";
import { bricolageGrotesque } from "./fonts";
import { useState } from "react";
import LinkButton from "./link-button";
import { mainNavLinks } from "../lib/constants";
import CloseIcon from "./icons/close-icon";
import MenuIcon from "./icons/menu-icon";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((prev) => !prev);

  return (
    <header className="fixed w-full bg-accent-2 text-white z-20 shadow-md">
      <div className="h-12 container mx-auto px-3 flex gap-3 items-center">
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
      } duration-500 ease-in-out w-52 top-12 left-0 absolute p-6 pl-4 rounded-br-md bg-accent-2 shadow-md`}
    >
      <ul className="flex flex-col gap-6 text-lg">
        {mainNavLinks.map(({ id, title, href }) => (
          <li key={id}>
            <Link
              href={href}
              onClick={toggleIsNavOpen}
              className=" hover:text-accent-1 active:text-accent-1"
            >
              {title}
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
    <button onClick={toggleIsNavOpen} className="text-accent-1">
      {isNavOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};

export default Header;
