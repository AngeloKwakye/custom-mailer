import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import spinner from "../assets/infinite-spinner.svg";

export const Login = () => {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState("Welcome!");
  const [load, setLoad] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSigninData((prevSignupData) => ({ ...prevSignupData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: signinData.email,
      password: signinData.password,
    };
    setLoad(true);
    const result = await fetch(
      `https://d-mailer-api.onrender.com/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (result.status === 401) {
      setDone(true);
      setNotification("Emal or password Incorrect, Please try again!");
      setTimeout(() => {
        setLoad(false);
      }, 2000);
    }
    if (result.status === 200) {
      setLoad(false);
      setDone(true);
      const data = await result.json();
      localStorage.setItem("token", data.accessToken);
      navigate("/inbox");
    }
  };

  return (
    <>
      (
      <form className="mt-40 max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-10 text-center">
          <span className="text-xl font-bold">
            D'Mailer <i className="fa-solid fa-inbox ml-1"></i>
          </span>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@dmail.com"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={handleChange}
          />
        </div>
        <p
          id="helper-text-explanation"
          className=" mb-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Don't have an account?
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Signup here
          </Link>
          .
        </p>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
      )
      {load ? (
        <div className="flex w-full justify-center items-center text-center">
          <img src={spinner} alt="loading spinner" className="w-20" />
          <span className="text-base font-syne">Loading please wait..</span>
        </div>
      ) : done === true ? (
        <aside className="fixed z-50 flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg bottom-4 right-4">
          <span className="text-xl font-medium hover:opacity-75">
            {notification}
          </span>
        </aside>
      ) : (
        ""
      )}
    </>
  );
};
