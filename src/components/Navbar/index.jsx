import "../../styles/styles.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-day-no-bg-navbar.png";
import ButtonGetStarted from "../ButtonGetStarted";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img className="navbar-logo" src={logo} alt="navbar" />
        <ul className="navlink-wrapper">
          <li className="navlink">
            <NavLink to="/" className="navtext">
              Home
            </NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/pricing" className="navtext">
              Pricing
            </NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/contact" className="navtext">
              Contact Us
            </NavLink>
          </li>
        </ul>
        <ButtonGetStarted />
      </div>
    </>
  );
};

export default Navbar;
