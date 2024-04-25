import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
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
    <div>Inprogress....😁</div>
  )
}
