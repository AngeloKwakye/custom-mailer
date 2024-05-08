import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Sidebar = ({ sidebarToggle, setsetUserPage }) => {
  const navigate = useNavigate();
  const [Index, setIndex] = useState(null);
  const [open, setOpen] = useState(true);
  const [userData, setUserData] = useState({});
  const Menus = [
    { title: "New Mail", icon: "folder-open", link: "/composemessage" },
    { title: "Inbox", icon: "inbox", link: "/inbox" },
    { title: "Outbox", icon: "right-from-bracket", link: "/outbox" },
    { title: "Trash ", icon: "trash-can", link: "/trash", gap: true },
    { title: "Archive", icon: "box-archive", link: "/archived" },
    { title: "Settings ", icon: "gear", link: "/settings", gap: true },
  ];

  const changeIndex = (index) => {
    setIndex(index);
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    navigate("/login");
  };

  const getUser = async () => {
    const token = localStorage.getItem("token");
    const userdetails = localStorage.getItem("userDetails");
    if (!userdetails) {
      fetch(`https://d-mailer-api.onrender.com/api/users/me`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Netwrok error fetching data");
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("userDetails", JSON.stringify(data));
          setUserData(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }

    if (userdetails) {
      const user = localStorage.getItem("userDetails");
      const userValue = JSON.parse(user);
      setUserData(userValue);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        <div>
          <h1
            className={`text-black rounded-lg  origin-left font-medium text-xl duration-200 font-serif ${
              !open && "scale-0"
            }`}
          >
            {`${userData.firstName} ${userData.lastName}`}
          </h1>

          <h1
            className={`text-black rounded-lg  origin-left text-sm duration-200 font-serif ${
              !open && "scale-0"
            }`}
          >
            {`${userData.email}`}
          </h1>
        </div>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <Link key={index} to={`${Menu.link}`}>
            <li
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
        <li
          onClick={() => signOut()}
          className="flex rounded-md p-2 cursor-pointer text-black hover:text-sky-700 focus:text-white text-sm items-center gap-x-4 mt-7 hover:bg-sky-300"
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span
            className={`${
              !open && "hidden"
            } origin-left text-black duration-200`}
          >
            Signout
          </span>
        </li>
      </ul>
    </div>
  );
};
