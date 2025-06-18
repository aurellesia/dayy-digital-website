import "../../styles/styles.scss";
import header_picture from "../../assets/images/header-picture-logo.png";
import ButtonGetStarted from "../ButtonGetStarted";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-title-large">
          <div>Converting clicks</div>
          <div className="header-title-medium">into loyal customers</div>
        </div>
        <div className="header-tagline gray-text">
        Helping your digital advertising needs, developing advertising-based social media and generating sales for your brand.
        </div>
        <div className="header-btn-wrapper">
          <ButtonGetStarted />
          <button className="btn-contact-us">Contact Us</button>
        </div>
        <img
          className="header-image"
          src={header_picture}
          alt="header"
        />
      </div>
    </>
  );
};

export default Header;
