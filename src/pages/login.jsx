import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState("Welcome!");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setSigninData((prevSignupData) => ({ ...prevSignupData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: signinData.email,
      password: signinData.password,
    };
    // console.log({userData})
    const result = await fetch(`http://localhost:6100/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!result) {
      setNotification("Failed to Login, Please try again!");
      return;
    }

    if (result) {
      const data = await result.json();
      console.log({ data });
      localStorage.setItem("token", data.accessToken);
      navigate("/");
    }
    setLoad(true);
    // navigate("/");
  };

  return (
    <>
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
      {load ? (
        <aside class="fixed z-50 flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg bottom-4 right-4">
          <span class="text-xl font-medium hover:opacity-75">
            {notification}
          </span>
        </aside>
      ) : (
        ""
      )}
    </>
  );
};
