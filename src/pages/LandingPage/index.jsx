import Body from "../../components/Body";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const LandingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="content">
        <Header />
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
