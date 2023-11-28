import { Link } from "react-router-dom";
import bgForbidden from "../../assets/error404.jpg";
import Button from "../shared/Button/Button";

const Forbidden = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bgForbidden})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div className="text-center" style={backgroundImageStyle}>
      <h1 className="text-[400px] font-bold text-black">403</h1>

      <h2 className="text-5xl font-bold">
        You do not have permission to access this page.
      </h2>
      <Link to={"/"}>
        <Button text={"Go To Home"}></Button>
      </Link>
    </div>
  );
};

export default Forbidden;
