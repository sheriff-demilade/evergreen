import Link from "next/link";
import clsx from "clsx";

type LinkButtonType = {
  children: React.ReactNode;
  href: string;
  variant: "accent-1" | "accent-2" | "white" | "login";
  customStyles?: string;
};

/* `${variant} $customStyles` */

const LinkButton = ({
  children,
  href,
  variant,
  customStyles,
}: LinkButtonType) => {
  return (
    <Link
      href={href}
      className={clsx(
        `inline-block px-7 text-center leading-none rounded-full shadow-md ${customStyles}`,
        {
          " font-semibold text-white bg-accent-1 hover:bg-accent-shade active:bg-accent-shade duration-300 py-3":
            variant === "accent-1",
          " font-semibold text-white bg-accent-2 hover:bg-accent-tint active:bg-accent-tint duration-300 py-3":
            variant === "accent-2",
          " font-extrabold bg-white duration-300 py-3": variant === "white",
          " font-semibold text-white bg-accent-1 hover:bg-accent-shade active:bg-accent-shade duration-300 py-2":
            variant === "login",
        }
      )}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
