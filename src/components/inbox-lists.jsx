import React from "react";
import { Link } from "react-router-dom";

export const InboxLists = ({ sidebarToggle, setsetUserPage, userPage }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-[290px]"} w-89 text-left`}>
      <div className="h-[91vh] w-[260px] bg-white rounded-lg mx-1">
        <div className="pt-5">
          <span className="ml-5 text-lg font-bold">{userPage}</span>
          <hr className="bg-blsck h-1" />
        </div>
        <ul className="text-black">
          <li className="px-2 flex items-center w-full space-between mb-2 hover:shadow hover:bg-violet-100 focus:bg-violet-100 py-2">
            <div className="text-center pt-2 bg-green-500 m-2 rounded-full w-24 h-10">
              A
            </div>
            <div className="px-2 truncate">
              <Link className="font-bold">
                <span>Meta Open Source</span>
              </Link>
              <p>mail preview hshgshbshbsjsbhshsbhbbhbchbchb gsgsvh</p>
            </div>
          </li>

          <li className="px-2 flex items-center w-full space-between mb-2 hover:shadow hover:bg-violet-100 focus:bg-violet-100 py-2">
            <div className="text-center pt-2 bg-blue-500 m-2 rounded-full w-24 h-10">
              G
            </div>
            <div className="px-2 truncate">
              <Link className="font-bold">
                <span>Google password reset</span>
              </Link>
              <p>mail preview hshgshbshbsjsbhshsbhbbhbchbchb gsgsvh</p>
            </div>
          </li>
          <li className="px-2 flex items-center w-full space-between mb-2 hover:shadow hover:bg-violet-100 focus:bg-violet-100 py-2">
            <div className="text-center pt-2 bg-violet-500 m-2 rounded-full w-24 h-10">
              B
            </div>
            <div className="px-2 truncate">
              <Link className="font-bold">
                <span>Big D</span>
              </Link>
              <p>mail preview hshgshbshbsjsbhshsbhbbhbchbchb gsgsvh</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
