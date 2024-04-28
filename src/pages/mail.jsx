import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Navigate, useNavigate } from "react-router-dom";





export const Mail = () => {
  const [userData, setUserData] = useState({});


  const navigate = useNavigate();
  const getToken =()=>{
    const token = localStorage.getItem("token")
    console.log(token)
    if(!token){
      navigate("/login");
    }
  }

  const getUser =async ()=>{
   let userdata = localStorage.getItem("userDetails")
   if(userdata){
    console.log(userdata)
     setUserData(userdata);
   }
  }


  useEffect(()=>{
    getToken();
    getUser();
  },[]);
  
  return (
    
    <>
      <div className="flex">
        <Sidebar
        />
        <div class="relative h-screen w-full">
    <div class="absolute inset-0 bg-cyan-800 bg-opacity-70"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">Hello, {userData["userName"]}!</h1>
        <p class="text-xl text-white mt-4">Welcome to D'Mailer😁, feel free and explore the world of mailing.</p>
    </div>
</div>
        </div>
    </>
  );
};
