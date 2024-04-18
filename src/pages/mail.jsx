import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Navigate } from "react-router-dom";

export const Mail = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [userPage, setsetUserPage] = useState("");

  if(true){
    return <Navigate to={`/login`}/>
  }
  
  return (
    
    <>
      <div className="flex">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setsetUserPage={setsetUserPage}
        />
        {/* <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        /> */}
      </div>
      {/* <div className="flex bg-zinc-200">
        <div className="bg-zinc-200">
          <InboxLists userPage={userPage} sidebarToggle={sidebarToggle} />
        </div>

        <div className=" w-full">
          {userPage === "New Mail" && (
            <ComposeMessage
              sidebarToggle={sidebarToggle}
              setsetUserPage={setsetUserPage}
            />
          )}
          {userPage === "Inbox" && <Inbox sidebarToggle={sidebarToggle} />}
          {userPage === "Outbox" && (
              <Outbox />
          )}
          {/* {userPage === "experiences" && <p> <AdminExperiences sidebarToggle={sidebarToggle} /> </p>} */}
        {/* </div> */}
      {/* // </div> */}
    </>
  );
};
