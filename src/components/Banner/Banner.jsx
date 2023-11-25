import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <img className=" relative w-full" src={bannerImg} alt="banner iamge" />
      <div className="absolute flex items-center left-0 top-0  h-[80vh] ">
        <div className=" hidden lg:block  lg:space-y-7 lg:pl-24 ">
          <h2 className=" lg:text-5xl font-extrabold">
            Cutting-Edge Inventory <br />
            Management Solutions!
          </h2>
          <p className=" text-base text-[#717171] ">
            Our software is designed giving you real-time visibility into stock
            levels, order status, and supply
            <br /> chain activities. With Inventory Hub, you can optimize your
            inventory, reduce holding costs, and more.
          </p>
          <div className="flex">
            <button className="text-white rounded-md py-3 px-6 bg-[#00B499] mr-5">
              Get Started
            </button>
            <button className=" rounded-md py-3 px-6 border-solid border-2 border-black ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
