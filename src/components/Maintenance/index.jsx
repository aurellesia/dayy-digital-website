import "../../styles/styles.scss";
import maintenance_image from "../../assets/images/under-maintenance-logo.png";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Maintenance = () => {
  return (
    <>
      <Navbar />
      <div className="maintenane-page-wrapper">
        <img
          className="maintenance-image"
          src={maintenance_image}
          alt="maintenance_image"
        />
        <span className="maintenance-title">
          This page is under maintenance
        </span>
        <span className="maintenance-subtitle">
          Our page is currently undergoing scheduled maintenance.
        </span>
        <span className="maintenance-subtitle">
          We should be back shortly. Thank you for your patience.
        </span>
        <a className="button-back-to-home" href="/">Back to Home</a>
      </div>
      <Footer />
    </>
  );
};

export default Maintenance;
