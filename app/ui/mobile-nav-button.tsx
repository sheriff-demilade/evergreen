import CloseIcon from "./icons/close-icon";
import MenuIcon from "./icons/menu-icon";

type MobileNavButtonProps = {
  isNavOpen: boolean;
  toggleIsNavOpen: () => void;
};

const MobileNavButton = ({
  isNavOpen,
  toggleIsNavOpen,
}: MobileNavButtonProps) => {
  return (
    <button onClick={toggleIsNavOpen} className="text-main">
      {isNavOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};

export default MobileNavButton;