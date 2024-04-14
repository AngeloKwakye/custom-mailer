import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className={`${
          sidebarToggle ? "" : " ml-72 "
        }  w-full  bg-zinc-200 px-4 py-3 flex justify-between`}
      >
        <div className="flex item-center text-xl">
          <i
            className="fa-solid fa-bars text-black me-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          ></i>{" "}
          <span className="text-black font-semibold">D'Mailer</span>
        </div>
        <div className="flex item-center gap-x-5">
          <div className="relative md:w-65">
            <span className="relative md:absolute inset-y-0 left-0 flex item-center pl-2">
              <button className="p-1 focus:outline-none text-white md:text-black">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </span>
            <input
              type="text"
              className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            />
          </div>

          <div className="relative">
            <Link to="/profile">
              <button className="text-black group border-black rounded-full">
                <i className="fa-solid fa-user w-5 h6 mt-1"></i>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
