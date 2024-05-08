import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import spinner from "../assets/infinite-spinner.svg";
export const Mail = () => {
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const getToken = () => {
    setLoader(true);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };
  const getUser = async () => {
    const token = localStorage.getItem("token");
    const userdetails = localStorage.getItem("userDetails");
    if (!userdetails) {
    setLoader(true);
      fetch(`https://d-mailer-api.onrender.com/api/users/me`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Netwrok error fetching data");
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("userDetails", JSON.stringify(data));
          setUserData(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        })
        .finally(() => setLoader(false));
    }
    setLoader(false)
    if (userdetails) {
      const user = localStorage.getItem("userDetails");
      const userValue = JSON.parse(user);
      setUserData(userValue);
    }
  };

  useEffect(() => {
    getToken();
    getUser();
  }, []);

  return (
    <>
      {loader ? (
        <div className="w-40 flex justify-center items-center">
          <img src={spinner} alt="spinning image" />
        </div>
      ) : (
        <div className="flex">
          <Sidebar />
          <div class="relative h-screen w-full">
            <div class="absolute inset-0 bg-cyan-800 bg-opacity-70"></div>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <h1 class="text-4xl text-white font-bold">
                Hello, {userData.userName}!
              </h1>
              <p class="text-xl text-white mt-4">
                Welcome to D'Mailer😁, feel free and explore the world of
                mailing.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
