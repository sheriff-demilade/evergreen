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
        `inline-block px-7 leading-none font-semibold rounded-full shadow-md ${customStyles}`,
        {
          "text-white bg-accent-1 hover:bg-accent-shade active:bg-accent-shade duration-300 py-3":
            variant === "accent-1",
          "text-white bg-accent-2 hover:bg-accent-tint active:bg-accent-tint duration-300 py-3":
            variant === "accent-2",
          "text-transparent bg-white duration-300 py-3": variant === "white",
          "text-white bg-accent-1 hover:bg-accent-shade active:bg-accent-shade duration-300 py-2":
            variant === "login",
        }
      )}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
