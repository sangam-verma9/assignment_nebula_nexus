import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full">
        <div className="md:flex bg-sky-500 items-center justify-between py-2 md:px-10 px-7">
          <div className="flex font-bold text-2xl cursor-pointer items-center font-[poppins]">
            {/* <img src={""} alt="logo" /> */}
            <Link to="/">
              <span
                style={{ fontSize: "30px", color: "white" }}
                title="kitcart"
              >
                MyBlog
              </span>
            </Link>
          </div>

          <div
            className="absolute right-8 top-4 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <ImCross size="30px" className="text-white" />
            ) : (
              <ImMenu size="30px" className="text-white" />
            )}
          </div>

          <ul
            className={`md:flex items-center md:pb-0 pb-12 md:static absolute bg-sky-500 w-full md:w-auto left-0 z-[-1] md:z-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-14 z-10" : "top-[-450px] "
            }`}
            style={{ zIndex: "1" }}
          >
            <li className="md:ml-6 text-xl md:my-0 my-7">
              <h3 className="font-bold font-serif text-white">Hi!</h3>
            </li>
            

            <li className="md:ml-6 text-xl md:my-0 my-7" title="search">
              <Link to="/search" className=" text-white">
                <ImSearch size="30px" className=" hover:text-sky-200" />
              </Link>
            </li>

            <li className="md:ml-6 text-xl md:my-0 my-7" title="Add post">
              <Link to="/addpost" className=" text-white ">
                <MdAddCircle 
                  size="30px"
                  className=" hover:text-sky-200"
                />
              </Link>
            </li>

            <li className="md:ml-6 text-xl md:my-0 my-7" title="user">
              <Link to="/user" className="text-white">
                <FaUserCircle size="30px" className=" hover:text-sky-200" />
              </Link>
            </li>
            <li className="md:ml-6 text-xl md:my-0 my-7 " title="about">
              <Link to="/about" className=" text-white  duration-500 ">
                <FaInfo size="30px" className=" hover:text-sky-200" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
