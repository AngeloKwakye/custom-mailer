import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const InboxLists = ({ inbox }) => {
  const [user, setUser]= useState({})
  const [messages, setMessages]= useState([])
  const [filtredLists, setFiltredLists]= useState(inbox)
  const userData = localStorage.getItem("userDetails");

  console.log({inbox})
  
  useEffect(()=>{
    setFiltredLists(inbox)
    setUser(JSON.parse(userData));
    // setMessages(filtredvalues);
    console.log({filtredLists})
    const filtredvalues = filtredLists.map((message)=>{
      return message.from == user.email;
    })

    console.log({filtredvalues})
    setMessages(filtredvalues);
  },[])
   
 console.log({messages})




  return (
    <>
      <div className="flex-1">
          <div className="w-full text-center">
          </div>
          <div className="mt-5">
          <ul class="bg-white rounded-lg divide-y divide-gray-200 p-1">
          {messages.map((message, index)=>{
            return (
              <Link key={index} to={`/message/${message._id}`}>
              <li  className="px-2 flex items-center w-full space-between mb-2 hover:shadow hover:bg-violet-100 focus:bg-violet-100 py-2">
            <div className="text-center items-center p-2 bg-green-500 m-1 rounded-full w-10 h-10">
              {message.subject}
            </div>
            <div className="px-2 w-[85%] truncate">
                <span className="font-bold">{message.subject}</span>
              <p>{message.body}</p>
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
