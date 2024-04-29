import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { OutboxLists } from "../components/outbox-lists";

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
    const token = localStorage.getItem("token");
    const results = fetch("http://localhost:6100/api/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setOutboxLoading(true);
          setOutbox(data);
        }
      })
      .catch((error) => {
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
