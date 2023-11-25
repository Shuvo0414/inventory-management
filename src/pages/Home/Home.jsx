import { Helmet } from "react-helmet-async";
import AboutOus from "../../components/AboutOus/AboutOus";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Home</title>
      </Helmet>
      <AboutOus></AboutOus>
    </div>
  );
};

export default Home;
