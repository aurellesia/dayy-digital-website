import "../../styles/styles.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-day-no-bg-navbar.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <ul className="navlink-wrapper">
          <li className="navlink">
            <NavLink to="/" className="navtext">
              Home
            </NavLink>
          </li>
          {/* <li className="navlink">
            <NavLink to="/maintenance" className="navtext">
              About Us
            </NavLink>
          </li> */}
          {/* <li className="navlink">
            <div class="dropdown">
              <button class="dropbtn">
                Services
              </button>
              <div class="dropdown-content">
                <NavLink to="/maintenance" className="navtext">
                  Services 1
                </NavLink>
                <NavLink to="/maintenance" className="navtext">
                  Services 2
                </NavLink>
                <NavLink to="/maintenance" className="navtext">
                  Services 3
                </NavLink>
              </div>
            </div>
          </li> */}

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
