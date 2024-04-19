import React from "react";
import { Link } from "react-router-dom";

export const InboxLists = ({ sidebarToggle, setsetUserPage, userPage }) => {

 const messages = [
    {titie: "Meta Open Source", detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloribus perferendis! Unde magni similique optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?"},
    {titie: "Google password reset", detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloribus perferendis! Unde magni similique optio facilis esse debitis a magnam non, inventore assumenda voluptatem."},
    {titie: "Big D", detail: "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?"},
  ]



  return (
    <div className={`${sidebarToggle ? "" : "ml-[290px]"} w-89 text-left`}>
      <div className="h-[91vh] w-[260px] bg-white rounded-lg mx-1">
        <div className="pt-5">
          <span className="ml-5 text-lg font-bold">{userPage}</span>
          <hr className="bg-blsck h-1" />
        </div>
        <ul className="text-black">
          {messages.map((message)=>{
            return (
              <li className="px-2 flex items-center w-full space-between mb-2 hover:shadow hover:bg-violet-100 focus:bg-violet-100 py-2">
            <div className="text-center items-center p-2 bg-green-500 m-1 rounded-full w-[15%] h-10">
              {message.titie[0]}
            </div>
            <div className="px-2 w-[85%] truncate">
              <Link className="font-bold">
                <span>{message.titie}</span>
              </Link>
              <p>{message.detail}</p>
            </div>
          </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};
