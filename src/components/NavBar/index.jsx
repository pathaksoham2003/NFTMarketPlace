import { useState } from "react";

import { close, logo, menu, User } from "../../assets";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-5 justify-between items-center navbar h-[100px] sm:px-[50px]">
      <Link to="/">
      <img src={logo} alt="hoobank" className="w-[200px] h-[32px]" />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-[16px] leading-[22px] font-semibold ${
              active === nav.title ? "text-white" : "text-white"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
        <Link
        to={"/SignUp"} 
          key={243156}
          className="font-poppins cursor-pointer text-[16px] bg-secondary ml-10 px-5 py-2.5 rounded-xl flex"
        >
          <img src={User} alt="hoobank" className="w-[20px] h-[25px] mr-2" />

          <div className="text-white ">
            Sign Up
          </div>
        </Link>
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-lightGrey absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
            <li
              key={243156}
              className="font-poppins cursor-pointer text-[16px] bg-secondary mt-2 px-5 py-2.5 w-full rounded-xl flex"
            >
              <img
                src={User}
                alt="hoobank"
                className="w-[20px] h-[25px] mr-2"
              />

              <Link to={"/SignUp"} className="text-white ">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
