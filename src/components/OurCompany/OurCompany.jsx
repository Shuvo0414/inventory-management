import Button from "../../pages/shared/Button/Button";
import teamImg from "../../assets/team.png";

const OurCompany = () => {
  return (
    <div className=" max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-center mt-[60px] lg:gap-[144px] p-6">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className=" lg:w-1/2"
      >
        <h1 className=" mb-3 font-semibold text-[#00B499]">Our Company</h1>
        <h2 className=" mb-3 text-[32px] font-medium">
          Driving Innovation in
          <br />
          Inventory Management Solutions
        </h2>
        <p className=" mb-6 text-[#717171] text-base font-normal ">
          Welcome to StockPilot, where innovation meets efficiency. We are
          dedicated to revolutionizing the way businesses manage their
          inventory. Our cutting-edge Inventory Management System provides
          unparalleled control and insight into your stock, ensuring seamless
          operations and maximizing efficiency. Join us on the journey to
          transform the landscape of inventory management.
        </p>
        <Button text={"Learn More"}></Button>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img className=" w-[410px]" src={teamImg} alt="" />
      </div>
    </div>
  );
};

export default OurCompany;
