import { Helmet } from "react-helmet-async";
import AboutOus from "../../components/AboutOus/AboutOus";
import Banner from "../../components/Banner/Banner";

import OurCompany from "../../components/OurCompany/OurCompany";
import OurTeam from "../../components/OurTeam/OurTeam";
import FaqSection from "../../components/FaqSection/FaqSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StockPilot | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutOus></AboutOus>
      <OurCompany></OurCompany>
      <OurTeam></OurTeam>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
