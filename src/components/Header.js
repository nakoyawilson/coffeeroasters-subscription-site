import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => !prev);
    document.querySelector("body").classList.toggle("lock-scroll");
  };

  const closeMenu = () => {
    if (window.innerWidth < 630) {
      setNavOpen(false);
      document.querySelector("body").classList.toggle("lock-scroll");
    }
  };

  return (
    <header className="header container">
      <img
        src="assets/shared/desktop/logo.svg"
        alt="Coffee Roasters logo"
        className="logo"
      />
      <button className="navigation-button" onClick={handleToggle}>
        <img
          src={
            navOpen
              ? "assets/shared/mobile/icon-close.svg"
              : "assets/shared/mobile/icon-hamburger.svg"
          }
          alt=""
        />
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
