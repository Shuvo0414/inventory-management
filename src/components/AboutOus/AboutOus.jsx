import image from "../../assets/about.png";
import Button from "../../pages/shared/Button/Button";
const AboutOus = () => {
  return (
    <div className=" max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-center mt-[60px] lg:gap-[144px] p-6">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img className=" w-[410px]" src={image} alt="" />
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className=" lg:w-1/2"
      >
        <h1 className=" mb-3 font-semibold text-[#00B499]">About Us</h1>
        <h2 className=" mb-3 text-[32px] font-medium">
          Guiding Businesses with Precision
          <br />
          Inventory Management
        </h2>
        <p className=" mb-6 text-[#717171] text-base font-normal ">
          At StockPilot, we are committed to revolutionizing the way businesses
          manage their inventory. Our cutting-edge Inventory Management System
          is designed to provide you with unparalleled control and insight into
          your stock, ensuring seamless operations and maximizing efficiency.
        </p>
        <Button text={"Learn More"}></Button>
      </div>
    </div>
  );
};

export default AboutOus;
