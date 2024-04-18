import React from "react";
import { Sidebar } from "../components/sidebar";
import { Navigate } from "react-router-dom";

export const ComposeMessage = () => {

  const messageSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <div className="flex">
        <div>
        <Sidebar/>
        </div>
        <div className="h-screen flex-1">
        <div className="border-2 border-blue-200 h-full">
          <div className="mt-10 text-center font-bold">Compose Message</div>
          <form onSubmit={messageSubmit()}>
            <div className="flex flex-col justify-between items-center sm:flex-row py-2 px-3">
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <button
                  type="submit"
                  className="py-1 px-7 rounded bg-blue-700  hover:bg-green-700 focus:bg-green-700 text-white hidden sm:block"
                >
                  send
                </button>
                <span style={{fontSize: 'small'}} className="text-sm sm:text-normal">{`from:<emailaddress@example.com>`}</span>
              </div>

              <div className="flex h-10 w-10 hover:bg-violet-100 focus:bg-violet-100 justify-center items-center rounded hidden sm:block">
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
            <hr />

            <div className="flex items-center py-2 px-3">
              <span className="py-1 px-7 border rounded bg-white hover:bg-violet-100 text-back">
                To
              </span>

              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="mt-1 w-full block bg-white px-3 py-4 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 sm:text-sm focus:outline-0"
              />
            </div>
            <hr />

            <div className="px-8">
              <input
                type="text"
                name="subject"
                placeholder="Add a subject"
                className="mt-1 w-full block bg-white px-3 py-4 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 sm:text-sm focus:outline-0"
              />
            </div>
            <hr />

            <div className="p-2">
              <textarea
                className="w-full border p-5 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 sm:text-sm focus:outline-0"
                rows="11"
                name="mesage"
              />
            </div>
            <div className="text-center sm:hidden">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-blue-700  hover:bg-green-700 focus:bg-green-700 px-8 py-2 text-sm font-semibold text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};
