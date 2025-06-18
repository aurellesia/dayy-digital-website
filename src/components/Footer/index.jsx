import "../../styles/styles.scss";
import twitter from "../../assets/images/twitter-white.png";
import instagram from "../../assets/images/instagram-white.png";
import whatsapp from "../../assets/images/whatsapp-white.png";
import facebook from "../../assets/images/facebook-white.png";
import email from "../../assets/images/email-white.png";

const Footer = () => {
  const stringWA = "TES"
  const whatsappLink = "https://wa.me/6289673629565?text=" + stringWA;
  const emailLink = "mailto:dayydigital@email.com"
  return (
    <>
      <div className="footer">
        <div className="footer-sosmed">
          {/* <a href="/"><img className="sosmed-logo twitter" src={twitter} alt="twitter" /></a>
          <a href="/"><img className="sosmed-logo instagram" src={instagram} alt="instagram" /></a>
          <a href="/"><img className="sosmed-logo facebook" src={facebook} alt="facebook" /></a> */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="sosmed-logo whatsapp"
              src={whatsapp}
              alt="whatsapp"
            />
          </a>
          <a href={emailLink}>
            <img className="sosmed-logo email" src={email} alt="email" />
          </a>
        </div>
        <div>
          <hr className="footer-line" />
        </div>
        <div className="footer-copyright-wrapper">
          <span className="footer-copyright">
            &#169; 2024. Dayy Digital. All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
