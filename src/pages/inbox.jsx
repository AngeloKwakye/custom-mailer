import React from "react";
import { Sidebar } from "../components/sidebar";
import { InboxLists } from "../components/inbox-lists";

export const Inbox = ({ sidebarToggle, setsetUserPage }) => {
  return (
    <>
    <div className="flex flex-row h-screen">
      <div className="">
        <Sidebar/>
      </div>
      <div className="w-full bg-gray-50 max-h-screen overflow-y-auto">
      <span className="font-bold p-[100px]">Inbox</span>
      <InboxLists/>
      </div>
      
    </div>
      
    </>
  );
};
