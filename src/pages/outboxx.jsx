import React, { useEffect } from 'react'
import { Sidebar } from '../components/sidebar'
import { InboxLists } from '../components/inbox-lists'
import { useNavigate } from 'react-router-dom';

export const Outbox = ({sidebarToggle, setsetUserPage}) => {

  const navigate = useNavigate();
  const getToken =()=>{
    const token = localStorage.getItem("token")
    console.log(token)
    if(!token){
      navigate("/login");
    }
  }


  useEffect(()=>{
    getToken();
  },[]);

  return (
    <>
         <div className="flex flex-row h-screen">
      <div className="">
        <Sidebar/>
      </div>
      <div className="w-full bg-gray-50 max-h-screen overflow-y-auto">
      <span className="font-bold p-[100px]">Outbox</span>
      <InboxLists/>
      </div>
      
    </div>
    </>
  )
}
