import { Link } from "react-router-dom";
import bg404 from "../../assets/error404.jpg";
import Button from "../shared/Button/Button";

const NotFound = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg404})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div className="text-center" style={backgroundImageStyle}>
      <h1 className="text-[400px] font-bold text-black">404</h1>

      <h2 className="text-5xl font-bold  text-">
        This is not the web page you are looking for.
      </h2>
      <Link to={"/"}>
        <Button text={"Go To Home"}></Button>
      </Link>
    </div>
  );
};

export default NotFound;
