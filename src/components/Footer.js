import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src="assets/shared/desktop/logo.svg" alt="Coffee Roasters logo" />
      <ul className="footer-links">
        <li className="footer-link">
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li className="footer-link">
          <Link to="/about" className="">
            About us
          </Link>
        </li>
        <li className="footer-link">
          <Link to="/plan" className="">
            Create your plan
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <img src="assets/shared/desktop/icon-facebook.svg" alt="" />
        </li>
        <li>
          <img src="assets/shared/desktop/icon-twitter.svg" alt="" />
        </li>
        <li>
          <img src="assets/shared/desktop/icon-instagram.svg" alt="" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
