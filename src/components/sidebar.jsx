import React, { useState } from "react";
import { Link } from "react-router-dom";

export const  Sidebar = ({sidebarToggle, setsetUserPage}) => {

  return (
    <div className={`${sidebarToggle ? " hidden " : " block " } ease-in-out w-72 bg-zinc-200 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
        <h1 className="tetxt-2x text-black font-bold ">{`<emailaddress@example.com>`}</h1>
      </div>
        <hr />
        <ul className="mt-3 text-black font-bold">
          
        <li className="mb-2 rounded hover:shadow hover:bg-zinc-300 focus:bg-zinc-300  py-2" onClick={()=> setsetUserPage('New Mail')}>
            
            <Link className=" px-2"><i className="fa-solid fa-house inline-block 1-6 h-6 mr-2 -mt-2"></i>Add New Mail</Link>
          </li>

          <li className="mb-2 rounded hover:shadow hover:bg-zinc-300 focus:bg-zinc-300  py-2" onClick={()=> setsetUserPage('Inbox')}>
            
            <Link className=" px-2"><i className="fa-solid fa-house inline-block 1-6 h-6 mr-2 -mt-2"></i>Inbox</Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-zinc-300 focus:bg-zinc-300  py-2"  onClick={()=> setsetUserPage('Outbox')}>
            
            <Link className="px-2"><i className="fa-solid fa-book h-6 mr-2 -mt-2"></i>Outbox</Link>
          </li>
        </ul>
    </div>
  );
};
