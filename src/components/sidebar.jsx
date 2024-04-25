import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = ({ sidebarToggle, setsetUserPage }) => {
  const navigate = useNavigate();
  const [Index, setIndex] = useState(null);
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "New Mail", icon: "folder-open", link: "/composemessage" },
    { title: "Inbox", icon: "inbox", link: "/inbox" },
    { title: "Outbox", icon: "right-from-bracket", link: "/outbox"},
    { title: "Trash ", icon: "trash-can", link:"/trash", gap: true },
    { title: "Archive", icon: "box-archive", link: "/archived" },
    { title: "Settings ", icon: "gear", link: "/settings", gap: true },
  ];

  const changeIndex = (index) => {
    console.log({ index });
    setIndex(index);
  };

  const signOut=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }

 
  return (
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-zinc-100 h-screen p-5  pt-8 relative duration-300`}
      >
        <i
          className={`fa-solid fa-greater-than text-sky-700 absolute cursor-pointer -right-3 top-9 p-2 bg-zinc-100 text-md border-cyan-700 
           border rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        ></i>
        <div className="flex gap-x-4 items-center">
          <i
            className={`fa-solid fa-envelope text-cyan-700 text-xl cursor-pointer duration-500 ${open}`}
          ></i>
          <h1
            className={`text-black rounded-lg  origin-left font-medium text-xl duration-200 font-serif ${
              !open && "scale-0"
            }`}
          >
            D'Mailer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
           <Link to={`${Menu.link}`}>
               <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-sky-300 text-black hover:text-sky-700 focus:text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-7" : "mt-2"} ${
                index === Index && "bg-sky-300"
              } `}
              onClick={() => changeIndex(index)}
            >
              <i className={`fa-solid fa-${Menu.icon}`}></i>
              <span
                className={`${
                  !open && "hidden"
                } origin-left text-black duration-200`}
              >
                {Menu.title}
              </span>
            </li>
           </Link>
          ))}
          <li onClick={()=> signOut()} className="flex rounded-md p-2 cursor-pointer hover:bg-sky-300 text-black hover:text-sky-700 focus:text-white text-sm items-center gap-x-4 mt-7 hover:bg-sky-300">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <span className={`${
                  !open && "hidden"
                } origin-left text-black duration-200`}>Signout</span>
          </li>
        </ul>
      </div>
      
  );
};
