import { Link } from "react-router-dom";
import ThemeDropdown from "../ui/ThemeDropdown";
import LogoDark from "/logo.svg";
import LogoLight from "/logo-light.svg";
import { useTheme } from "../../context/Theme";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className="w-full h-12 bg-neutral-800/10 border border-neutral-800 rounded-md flex items-center justify-between p-2 shadow-lg">
      <ThemeDropdown />
      <Link to="/">
        {theme === "light" ? (
          <img src={LogoLight} alt="logo" />
        ) : (
          <img src={LogoDark} alt="logo" />
        )}
      </Link>
    </header>
  );
};

export default Header;
