import "../../styles/styles.scss";
import { NavLink } from "react-router-dom";
import twitter from "../../assets/images/twitter-white.png";
import instagram from "../../assets/images/instagram-white.png";
import whatsapp from "../../assets/images/whatsapp-white.png";
import facebook from "../../assets/images/facebook-white.png";


const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* <img className="logo" src={logo} alt="logo" /> */}
        <div className="footer-menus">
          <ul className="footlink-wrapper">
            {/* <li className="footlink">
              <NavLink to="/" className="footlink-text">
                HOME
              </NavLink>
            </li>
            <li className="footlink">
              <NavLink to="/maintenance" className="footlink-text">
                ABOUT US
              </NavLink>
            </li>
            <li className="footlink">
            <div class="dropdown">
              <button class="dropbtn footlink-text">
                SERVICES
              </button>
              <div class="dropdown-content">
                <NavLink to="/maintenance1" className="navtext">
                  Services 1
                </NavLink>
                <NavLink to="/maintenance2" className="navtext">
                  Services 2
                </NavLink>
                <NavLink to="/maintenance3" className="navtext">
                  Services 3
                </NavLink>
              </div>
            </div>
          </li>
            <li className="footlink">
              <NavLink to="/maintenance" className="footlink-text">
                PRICING
              </NavLink>
            </li>
            <li className="footlink">
              <NavLink to="/maintenance" className="footlink-text">
                CONTACT US
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="footer-sosmed">
          <a href="/"><img className="sosmed-logo twitter" src={twitter} alt="twitter" /></a>
          <a href="/"><img className="sosmed-logo instagram" src={instagram} alt="instagram" /></a>
          <a href="/"><img className="sosmed-logo facebook" src={facebook} alt="facebook" /></a>
          <a href="/"><img className="sosmed-logo whatsapp" src={whatsapp} alt="whatsapp" /></a>
        </div>
        <div>
            <hr className="footer-line"/>
        </div>
        <div className="footer-copyright-wrapper">
            <span className="footer-copyright">&#169; 2024. Dayy Digital. All rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
