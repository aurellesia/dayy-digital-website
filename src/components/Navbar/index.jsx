import "../../styles/styles.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-day-no-bg-navbar.png";

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
            <NavLink to="/maintenance" className="navtext">
              Pricing
            </NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/maintenance" className="navtext">
              Contact Us
            </NavLink>
          </li>
        </ul>
        <button className="button-get-started">Get Started</button>
      </div>
    </>
  );
};

export default Navbar;
