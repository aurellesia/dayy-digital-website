import "../../styles/styles.scss";
import logo1 from "../../assets/images/logoipsum-211.png";
import logo2 from "../../assets/images/logoipsum-213.png";
import logo3 from "../../assets/images/logoipsum-216.png";
import logo4 from "../../assets/images/logoipsum-217.png";
import logo5 from "../../assets/images/logoipsum-218.png";
import ad_icon from "../../assets/images/ad-yellow.png";
import landing_page_icon from "../../assets/images/landing-page-yellow.png";
import marketplace_icon from "../../assets/images/marketplace-yellow.png";
import meta_icon from "../../assets/images/meta-yellow.png";
import meta_cpas_icon from "../../assets/images/meta-cpas-yellow.png";
import tiktok_icon from "../../assets/images/tiktok-yellow.png";
import picture_one from "../../assets/images/body-picture-one-logo.png";
import checklist from "../../assets/images/check-yellow.png";
import testimoni from "../../assets/images/testimoni.png";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="logos">
          <img className="logo1" src={logo1} alt="logo1" />
          <img className="logo2" src={logo2} alt="logo2" />
          <img className="logo3" src={logo3} alt="logo3" />
          <img className="logo4" src={logo4} alt="logo4" />
          <img className="logo5" src={logo5} alt="logo5" />
        </div>
        <div className="part-one-wrapper">
          <span className="side-title-text">
            We serve various digital marketing services
          </span>
          <span className="side-content-text long-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </span>
        </div>
        <div className="part-two-wrapper">
          <div className="box">
            <img className="service-icon" src={ad_icon} alt="ad_icon" />
            <div className="content-box">
              <span className="box-title">Ads Strategy Consultation</span>
              <span className="long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi.
              </span>
            </div>
          </div>

          <div className="box">
            <img className="service-icon" src={meta_icon} alt="meta_icon" />
            <div className="content-box">
              <span className="box-title">Meta Ads Management</span>
              <span className="long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi.
              </span>
            </div>
          </div>

          <div className="box">
            <img className="service-icon" src={tiktok_icon} alt="tiktok_icon" />
            <div className="content-box">
              <span className="box-title">Tiktok Ads Management</span>
              <span className="long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi.
              </span>
            </div>
          </div>
        </div>
        <div className="part-two-wrapper">
          <div className="box">
            <img
              className="service-icon"
              src={meta_cpas_icon}
              alt="meta_cpas_icon"
            />
            <div className="content-box">
              <span className="box-title">Meta CPAS Management</span>
              <span className="long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi.
              </span>
            </div>
          </div>
          <div className="box">
            <img
              className="service-icon"
              src={marketplace_icon}
              alt="marketplace_icon"
            />
            <div className="content-box">
              <span className="box-title">Marketplace Ads Management</span>
              <span className="long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi.
              </span>
            </div>
          </div>
          <div className="box">
            <img
              className="service-icon"
              src={landing_page_icon}
              alt="landing_page_icon"
            />
            <div className="content-box">
              <span className="box-title">Landing Page Development</span>
              <span className="long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi.
              </span>
            </div>
          </div>
        </div>
        <div className="part-three-wrapper">
          <div className="part-three-side-text">
            <span className="part-three-side-title-text">
              Elevate your digital brand from zero to hero.
            </span>
            <div className="checklist-wrapper">
              <img className="checklist-icon" src={checklist} alt="checklist" />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>

            <div className="checklist-wrapper">
              <img className="checklist-icon" src={checklist} alt="checklist" />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="checklist-wrapper">
              <img className="checklist-icon" src={checklist} alt="checklist" />
              <span className="side-content-text long-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className="checklist-wrapper">
              <button className="button-get-started">Get Started</button>
            </div>
          </div>
          <img
            className="body-picture-one"
            src={picture_one}
            alt="picture_one"
          />
        </div>
        <div className="part-four-wrapper">
          <div className="part-four-picture">
            <img
              className="body-picture-two"
              src={testimoni}
              alt="testimoni_pict"
            />
          </div>
          <div className="testimonial-text">
            <span className="testimonial-statement long-text">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem."
            </span><br/><br/>
            <span className="testimonial-name">Aurellesia Warsito</span><br/>
            <span className="testimonial-company long-text">CEO Dayy Digital</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
