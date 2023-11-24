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
        isNavOpen ? "" : "opacity-0 pointer-events-none invisible"
      } duration-500 w-52 top-12 right-0 absolute p-6 rounded-bl-md bg-grey shadow-md`}
    >
      <ul className="flex flex-col gap-6 text-lg">
        {mainNavLinks.map(({ id, title, href }) => (
          <li key={id}>
            <Link href={href} onClick={toggleIsNavOpen}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
