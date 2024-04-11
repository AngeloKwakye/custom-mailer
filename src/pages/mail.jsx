import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";
import { ComposeMessage } from "./compose-message";
import { Inbox } from "./inbox";
import { Outbox } from "./outbox";
import { InboxLists } from "../components/inbox-lists";

export const Mail = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [userPage, setsetUserPage] = useState("");

  return (
    <>
      <div className="flex bg-zinc-200">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setsetUserPage={setsetUserPage}
        />
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>
      <div className="flex">
        <div className="bg-zinc-200">
          <InboxLists userPage={userPage} sidebarToggle={sidebarToggle} />
        </div>

        <div className="bg-zinc-200 w-full h-[100vh]">
          {userPage === "New Mail" && (
            <ComposeMessage
              sidebarToggle={sidebarToggle}
              setsetUserPage={setsetUserPage}
            />
          )}
          {userPage === "Inbox" && <Inbox sidebarToggle={sidebarToggle} />}
          {userPage === "Outbox" && (
            <p>
              {" "}
              <Outbox />{" "}
            </p>
          )}
          {/* {userPage === "experiences" && <p> <AdminExperiences sidebarToggle={sidebarToggle} /> </p>} */}
        </div>
      </div>
    </>
  );
};
