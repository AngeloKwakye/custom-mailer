import React from "react";
import { Link, useParams } from "react-router-dom";

export const InboxLists = ({ sidebarToggle, setsetUserPage, userPage }) => {
  const params = useParams();
  const messages = [
    {
      title: "Meta Open Source",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloribus perferendis! Unde magni similique optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
    {
      title: "Google password reset",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloribus perferendis! Unde magni similique optio facilis esse debitis a magnam non, inventore assumenda voluptatem.",
    },
    {
      title: "Big D",
      detail:
        "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
    {
      title: "Big D",
      detail:
        "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
    {
      title: "Big D",
      detail:
        "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
    {
      title: "Big D",
      detail:
        "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
    {
      title: "Big D",
      detail:
        "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
    {
      title: "Big D",
      detail:
        "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
    {
      title: "Big D",
      detail:
        "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
    {
      title: "Big D",
      detail:
        "optio facilis esse debitis a magnam non, inventore assumenda voluptatem. Labore rem illo repellat, officia possimus porro alias quibusdam quos, quia maxime cupiditate libero dicta reiciendis cumque, eligendi mollitia accusamus velit. Velit vel cupiditate at totam?",
    },
  ];

  return (
    <>
      <div className="flex-1">
          <div className="w-full text-center">
          </div>
          <div className="mt-5">
          <ul class="bg-white rounded-lg divide-y divide-gray-200 p-1">
          {messages.map((message)=>{
            return (
              <Link to={`/message/${message.title}`}>
              <li className="px-2 flex items-center w-full space-between mb-2 hover:shadow hover:bg-violet-100 focus:bg-violet-100 py-2">
            <div className="text-center items-center p-2 bg-green-500 m-1 rounded-full w-10 h-10">
              {message.title[0]}
            </div>
            <div className="px-2 w-[85%] truncate">
                <span className="font-bold">{message.title}</span>
              <p>{message.detail}</p>
            </div>
          </li>
              </Link>
            )
          })}
          </ul>
          </div>

        </div>
      {/*       
      <ul className="text-black">
          {messages.map((message)=>{
            return (
              <li className="px-2 flex items-center w-full space-between mb-2 hover:shadow hover:bg-violet-100 focus:bg-violet-100 py-2">
            <div className="text-center items-center p-2 bg-green-500 m-1 rounded-full w-[10%] h-10">
              {message.title[0]}
            </div>
            <div className="px-2 w-[85%] truncate">
              <Link className="font-bold">
                <span>{message.title}</span>
              </Link>
              <p>{message.detail}</p>
            </div>
          </li>
            )
          })}
        </ul> */}
    </>
  );
};
