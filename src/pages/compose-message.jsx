import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import spinner from "../assets/infinite-spinner.svg";

export const ComposeMessage = () => {
  const [message, setMessage] = useState({
    to: "",
    subject: "",
    body: "",
  });
  const [userData, setUserData] = useState({});
  const [load, setLoad] = useState(false);
  const [composeLoading, setComposeLoading] = useState(false);
  const [notification, setNotification] = useState("");

  const navigate = useNavigate();
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    setLoad(true);
  };

  const getUser = async () => {
    setComposeLoading(true);
    const token = localStorage.getItem("token");
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
        setUserData(data);
        setComposeLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessage((prevSignupData) => ({ ...prevSignupData, [name]: value }));
  };

  useEffect(() => {
    getToken();
    getUser();
  }, []);

  const messageSubmit = async (e) => {
    e.preventDefault();
    const messageDetails = {
      from: userData.email,
      to: message.to,
      subject: message.subject,
      body: message.body,
      date: new Date(),
    };
    const token = localStorage.getItem("token");
    const result = await fetch(
      `https://d-mailer-api.onrender.com/api/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(messageDetails),
      }
    );
    if (result.status !== 201) {
      setNotification("Failed to send mail, Please try again!");
      return;
    }

    if (result.status === 201) {
      const data = await result.json();
      setLoad(true);
      setNotification("Message Sent! 👏");
      setTimeout(() => {
        setLoad(false);
      }, 2000);
      setMessage({
        body: "",
        to: "",
        subject: "",
      });
    }
  };

  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        {composeLoading ? (
          <div className="flex flex-col w-full justify-center items-center text-center">
            <img src={spinner} alt="loading spinner" className="w-48" />
            <span className="text-base font-syne">Loading please wait..</span>
          </div>
        ) : userData ? (
          <div className="h-screen flex-1">
            <div className="border-2 border-blue-200 h-full">
              <div className="mt-10 text-center font-bold">Compose Message</div>
              <form onSubmit={messageSubmit}>
                <div className="flex flex-col justify-between items-center sm:flex-row py-2 px-3">
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <button
                      type="submit"
                      className="py-1 px-7 rounded bg-blue-700  hover:bg-green-700 focus:bg-green-700 text-white hidden sm:block"
                    >
                      send
                    </button>
                    <span
                      style={{ fontSize: "small" }}
                      className="text-sm sm:text-normal"
                    >
                      {userData.email}
                    </span>
                  </div>

                  <div className="flex h-10 w-10 hover:bg-violet-100 focus:bg-violet-100 justify-center items-center rounded hidden sm:block">
                    {load ? (
                      <aside className="fixed z-50 flex items-center justify-center px-5 py-3 text-white bg-black rounded-lg bottom-4 right-4">
                        <span className="text-xl font-medium hover:opacity-75">
                          {notification}
                        </span>
                      </aside>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <hr />

                <div className="flex items-center py-2 px-3">
                  <span className="py-1 px-7 border rounded bg-white hover:bg-violet-100 text-back">
                    To
                  </span>

                  <input
                    type="email"
                    name="to"
                    value={message.to}
                    placeholder="address@dmail.com"
                    className="mt-1 w-full block bg-white px-3 py-4 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 sm:text-sm focus:outline-0"
                    onChange={handleChange}
                  />
                </div>
                <hr />

                <div className="px-8">
                  <input
                    type="text"
                    name="subject"
                    value={message.subject}
                    placeholder="Add a subject"
                    className="mt-1 w-full block bg-white px-3 py-4 placeholder-slate-400 placeholder:font-semibold placeholder:text-gray-500 sm:text-sm focus:outline-0"
                    onChange={handleChange}
                  />
                </div>
                <hr />

                <div className="p-2">
                  <textarea
                    className="w-full border p-5 placeholder-slate-400 placeholder:font-semibold bg-gray-100 placeholder:text-gray-500 sm:text-sm focus:outline-0"
                    rows="12"
                    name="body"
                    value={message.body}
                    placeholder="Message"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center sm:hidden">
                  <button
                    type="submit"
                    className="cursor-pointer rounded-lg bg-blue-700  hover:bg-green-700 focus:bg-green-700 px-8 py-2 text-sm font-semibold text-white"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
