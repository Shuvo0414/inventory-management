import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
const Footer = () => {
  return (
    <footer>
      <div className=" flex flex-col lg:flex-row overflow-hidden">
        <div className=" bg-[#1F2937] lg:w-1/2 text-white text-center p-10">
          <h1 className=" text-[32px] font-medium">CONTACT US</h1>
          <p className=" text-xl font-medium mt-6">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 01792459343 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className=" bg-[#111827] lg:w-1/2 text-center p-10 text-white">
          <h1 className=" text-[32px] font-medium text-white">Social</h1>
          <p className=" text-xl font-medium mt-6">Join us on social media</p>
          <div className=" mt-8 flex space-x-8 items-center text-[32px] justify-center">
            <FaFacebookF />
            <IoLogoInstagram />
            <SlSocialTwitter />
          </div>
        </div>
      </div>

      <div className="footer bg-[#151515] footer-center p-4 text-white ">
        <aside>
          <p>Copyright © 2023 - All right reserved by StockPilot Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
