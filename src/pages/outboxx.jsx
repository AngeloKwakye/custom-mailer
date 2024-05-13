import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { OutboxLists } from "../components/outbox-lists";
import spinner from "../assets/infinite-spinner.svg";

export const Outbox = () => {
  const [outbox, setOutbox] = useState([]);
  const [outboxLoad, setOutboxLoading] = useState(false);

  const navigate = useNavigate();
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  const getAllMessages = async () => {
    setOutboxLoading(true);
    const token = localStorage.getItem("token");
    fetch("https://d-mailer-api.onrender.com/api/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setOutboxLoading(false);
          setOutbox(data);
        }
      })
      .catch((error) => {
        setOutboxLoading(false);
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    getToken();
    getAllMessages();
  }, []);

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="">
          <Sidebar />
        </div>
        {outboxLoad ? (
          <div className="flex flex-col w-full justify-center items-center text-center">
            <img src={spinner} alt="loading spinner" className="w-48" />
            <span className="text-base font-syne">Loading please wait..</span>
          </div>
        ) : outbox.length > 0 ? (
          <div className="w-full bg-gray-50 max-h-screen overflow-y-auto">
            <OutboxLists outbox={outbox} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
