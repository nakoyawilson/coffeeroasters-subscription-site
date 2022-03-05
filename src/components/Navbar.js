import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { handleToggle, closeMenu, navOpen } = props;
  return (
    <nav className={`navigation ${navOpen ? "open" : ""}`}>
      <button className="navigation-button" onClick={handleToggle}>
        <img src="assets/shared/mobile/icon-close.svg" alt="" />
      </button>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
            onClick={closeMenu}
          >
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/plan"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active-nav-link" : ""}`
            }
            onClick={closeMenu}
          >
            Create your plan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
