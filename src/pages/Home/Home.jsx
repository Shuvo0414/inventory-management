import { Helmet } from "react-helmet-async";
import AboutOus from "../../components/AboutOus/AboutOus";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutOus></AboutOus>
    </div>
  );
};

export default Home;
