import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <header className="header">
      <img src="assets/shared/desktop/logo.svg" alt="Coffee Roasters logo" />
      <button className="navigation-button" onClick={handleToggle}>
        <img src="assets/shared/mobile/icon-hamburger.svg" alt="" />
      </button>
      <Navbar
        handleToggle={handleToggle}
        closeMenu={closeMenu}
        navOpen={navOpen}
      />
    </header>
  );
};

export default Header;
