import React from "react";

export const ComposeMessage = ({ sidebarToggle, setsetUserPage }) => {
  return (
    <div
      className={`${
        sidebarToggle ? "" : "ml-[5px]"
      } w-89 text-center ml-[5px] mx-10 pb-10`}
    >
      <div
        className={`${
          sidebarToggle ? "" : "w-89"
        } w-full h-[91vh] border rounded-lg text-left overflow-hidden  bg-white`}
      >
        <div className="flex justify-between items-center py-2 px-3">
          <div className="flex gap-5">
            <button className="py-1 px-7 rounded bg-green-600 hover:bg-green-700 focus:bg-green-700  text-white">
              send
            </button>

            <span>{`from:<emailaddress@example.com>`}</span>
          </div>

          <div className="flex h-10 w-10 hover:bg-violet-100 focus:bg-violet-100 flex justify-center items-center rounded ">
          <i class="fa-solid fa-trash"></i>
          </div>
        </div>
        <hr />

        <div className="flex items-center py-2 px-3">
          <div className="flex gap-5">
            <button className="py-1 px-7 border rounded bg-white hover:bg-violet-100 focus:bg-green-700  text-back">
              To
            </button>

            <input type="email" placeholder="email@example.com" className="w-[700px] focus:outline-0"/>
          </div>
        </div>

        <div className="flex items-center py-2 px-3">
          <div className="flex gap-5">
            <input type="text" placeholder="Add a subject" className="w-[700px] h-[40px] focus:outline-0"/>
          </div>
        </div>
        <hr />

       <div className="ml-2 mt-5 w-[850px] h-auto">
        <textarea className="w-full" rows='19' name="mesage" />
       </div>
      </div>
    </div>
  );
};
