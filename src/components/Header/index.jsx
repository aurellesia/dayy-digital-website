import "../../styles/styles.scss";
import header_picture from "../../assets/images/header-picture-logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-title">
          <div>Converting clicks</div>
          <div className="text-two">into loyal customers</div>
        </div>
        <div className="header-subtitle long-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae
        </div>
        <div className="button-header-wrapper">
          <button className="button-get-started">Get Started</button>
          <button className="button-contact-us">Contact Us</button>
        </div>
        <img
          className="header-picture"
          src={header_picture}
          alt="header-picture"
        />
      </div>
    </>
  );
};

export default Header;
