import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { InboxLists } from "../components/inbox-lists";
import { useNavigate } from "react-router-dom";

export const Inbox = ({ sidebarToggle, setsetUserPage }) => {

  const [inbox, setInbox] = useState([]);

  const navigate = useNavigate();

  const getToken =()=>{
    const token = localStorage.getItem("token")
    console.log(token)
    if(!token){
      navigate("/login");
    }
  }


  const getAllMessages=async ()=>{
    const token = localStorage.getItem("token");
    const results = fetch("http://localhost:6100/api/messages",{
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((res)=> {
      return res.json();
    }).then((data)=>{
      if(data){
        console.log(data);
        setInbox(data);
      }
       
    }).catch(error =>{
      console.error('There was a problem with the fetch operation:', error)
    })

    
  }

  useEffect(()=>{
    getToken();
    getAllMessages();
  },[]);
  
  if(!inbox){
    return <div>Loading....</div>
  }

  return (
    <>
    <div className="flex flex-row h-screen">
      <div className="">
        <Sidebar/>
      </div>
      <div className="w-full bg-gray-50 max-h-screen overflow-y-auto">
      <span className="font-bold p-[100px]">Inbox</span>
      <InboxLists inbox={inbox}/>
      </div>

      <div className="w-[800px] text-center">
        <p>dbhbdnjdnknjbdhb</p>
      </div>
      
    </div>
      
    </>
  );
};
