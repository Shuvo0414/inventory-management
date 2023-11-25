import { Helmet } from "react-helmet-async";
import AboutOus from "../../components/AboutOus/AboutOus";
import Banner from "../../components/Banner/Banner";

import OurCompany from "../../components/OurCompany/OurCompany";
import OurTeam from "../../components/OurTeam/OurTeam";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutOus></AboutOus>
      <OurCompany></OurCompany>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
