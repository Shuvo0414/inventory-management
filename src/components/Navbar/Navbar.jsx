import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/ilogo.png";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useManeger from "../../hooks/useManeger";
import WatchDemoVideo from "../../pages/WatchDemoVideo/WatchDemoVideo";
import { useEffect, useState } from "react";

import "./navbar.css";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin, ,] = useAdmin();
  const [isManeger, ,] = useManeger();

  console.log(isAdmin);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending "
              : isActive
              ? " text-[#00B499]  underline font-medium"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink>About Us</NavLink>
      </li>

      <WatchDemoVideo></WatchDemoVideo>

      {!isManeger && !isManeger && (
        <li>
          <NavLink
            to="/createStore"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending "
                : isActive
                ? "text-[#00B499] underline font-medium"
                : ""
            }
          >
            Create-Store
          </NavLink>
        </li>
      )}

      {isManeger && (
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending "
                : isActive
                ? " text-[#00B499]  underline font-medium"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {isAdmin && (
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending "
                : isActive
                ? " text-[#00B499]  underline font-medium"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        // Adjust the scroll threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`navbar fixed z-10 top-0  bg-[#F5F7FA] bg-opacity-10 text-black py-5 px-3 lg:px-24 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div>
            <img src={logo} alt="logo image" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-6 menu-horizontal px-1 text-base font-normal">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          {user?.email ? (
            <div className="dropdown dropdown-end ">
              <label
                tabIndex={0}
                className="btn btn-Secondary btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm btn-Secondary">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-sm text-white bg-[#0B99FF]"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className=" text-[#00B499] mr-[10px] ">Login</button>
              </Link>
              <Link to={"/signup"}>
                <button className=" bg-[#00B499] text-white py-[10px] rounded-md px-5">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
