import member1 from "../../assets/ceo.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";
import member4 from "../../assets/member4.png";

const OurTeam = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className=" max-w-screen-xl mx-auto  text-center mt-[60px]"
    >
      <h1 className=" text-4xl font-bold text-[#00B499]">Our team</h1>
      <p className=" text-[#5A6980] text-base  p-4">
        Our team is a diverse group of individuals from various origins,
        cultures, and backgrounds, each contributing unique <br /> perspectives
        and skills. Together, this blend of talents forms a powerful and
        cohesive team dedicated to <br /> driving innovation and excellence in
        every aspect of StockPilot.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* member 1 */}
        <div className=" card  bg-base-100  ">
          <figure className="px-10 pt-10">
            <img src={member1} alt="Shoes" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" text-xl text-[#363F4D] font-bold">John Doe</h2>
            <p className=" text-base text-[#6C7E99]">CEO</p>
          </div>
        </div>
        {/* member 2 */}
        <div className=" card  bg-base-100  ">
          <figure className="px-10 pt-10">
            <img src={member2} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" text-xl text-[#363F4D] font-bold">Jane Smith</h2>
            <p className=" text-base text-[#6C7E99]">CTO</p>
          </div>
        </div>
        {/* member 3 */}
        <div className=" card  bg-base-100  ">
          <figure className="px-10 pt-10">
            <img src={member3} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" text-xl text-[#363F4D] font-bold">Sarah Brown</h2>
            <p className=" text-base text-[#6C7E99]">
              Customer Support Specialist
            </p>
          </div>
        </div>
        {/* member 4 */}
        <div className=" card  bg-base-100  ">
          <figure className="px-10 pt-10">
            <img src={member4} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" text-xl text-[#363F4D] font-bold">Alex Johnson</h2>
            <p className=" text-base text-[#6C7E99]">Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
