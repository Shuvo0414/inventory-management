import { IoMdMenu } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import logo from "../../src/assets/ilogo.png";
import useShop from "../hooks/useShop";
import ManegerMenu from "../components/Dashboard/Sidebar/ManegerMenu";
import { MdHomeWork } from "react-icons/md";
import MenuItem from "../components/Dashboard/Sidebar/MenuItem";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const { logOut } = useAuth();
  const [shop] = useShop();
  console.log(shop);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col items-start py-8 px-2 lg:px-28  border border-red-500  ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="text-3xl drawer-button lg:hidden"
        >
          <IoMdMenu />
        </label>
        <div className=" ">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu flex flex-col justify-between  p-8 w-80  min-h-full shadow-2xl bg-base-200 text-base-content text-lg font-normal ">
          {/* Sidebar content here */}
          <div className="">
            <img className=" w-20" src={shop[0]?.shopLogo} alt="" />
            <li className=" mt-5">
              <ManegerMenu></ManegerMenu>
            </li>
          </div>
          <hr />
          {/* home and logout button */}
          <div>
            <button className=" text-lg font-normal">
              <MenuItem
                label={"Home"}
                icon={MdHomeWork}
                address={"/"}
              ></MenuItem>
            </button>
            <button
              onClick={logOut}
              className="flex text-lg font-normal w-full items-center  py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />

              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
