import { mainNavLinks } from "@/app/lib/constants";
import Link from "next/link";

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
      } duration-500 w-52 top-12 left-0 absolute p-6 rounded-br-md bg-accent-2 shadow-md`}
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

export default Navigation;
