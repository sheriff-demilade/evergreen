type ButtonProps = {
  children: React.ReactNode;
  type?: "button";
};

const Button = ({ children, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      className="inline-block px-7 py-3 text-center leading-none rounded-full shadow-md font-semibold text-white bg-accent-1 hover:bg-accent-shade active:bg-accent-shade duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
