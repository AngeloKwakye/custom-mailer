import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/sidebar";
import { InboxLists } from "../components/inbox-lists";
import { useNavigate } from "react-router-dom";

export const Inbox = () => {
  const [inbox, setInbox] = useState([]);
  const [inboxLoad, setInboxLoading] = useState(false);

  const navigate = useNavigate();

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  const getAllMessages = async () => {
    const token = localStorage.getItem("token");
    const results = fetch("https://d-mailer-api.onrender.com/api/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setInbox(data);
          setInboxLoading(true);
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

  if (!inbox) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="">
          <Sidebar />
        </div>
        {inboxLoad ? (
          <div className="w-full bg-gray-50 max-h-screen overflow-y-auto">
            <InboxLists inbox={inbox} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
