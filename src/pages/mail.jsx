import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Navigate, useNavigate } from "react-router-dom";





export const Mail = () => {

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
      <div className="flex">
        <Sidebar
        />
        <div class="relative h-screen w-full">
    <div class="absolute inset-0 bg-cyan-800 bg-opacity-70"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">Hello, World!</h1>
        <p class="text-xl text-white mt-4">This is a sample text</p>
    </div>
</div>
        </div>
    </>
  );
};
