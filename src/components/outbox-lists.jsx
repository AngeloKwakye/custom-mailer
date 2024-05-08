import React, { useEffect, useState } from "react";

export const OutboxLists = ({ outbox }) => {
    const [messages, setMessages] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
    const [allcolors, setColors] = useState([]);
    const [lists, setLists] = useState(outbox);
    const userData = localStorage.getItem("userDetails");

    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleMessageClick = (message) => {
      setSelectedMessage(message);
    };
  
    const getFiltredData = () => {
      if (!lists) {
        return;
      }
      const user = JSON.parse(userData);
      const filteredMessages = lists.filter((message) => {
        return message.from == user.email;
      });
      console.log({lists})
      console.log(filteredMessages)
  
      setMessages(filteredMessages);
      setColors(generateRandomColors(filteredMessages))
      setUserDetails(JSON.parse(userData));
    };

    function generateRandomColors(array) {
      const colors = [];
      const colorSet = new Set(); // Use a set to store unique colors
    
      // Function to generate a random color in the format "#RRGGBB"
      function randomColor() {
        const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // Red component
        const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // Green component
        const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // Blue component
        return `#${r}${g}${b}`;
      }
    
      // Generate unique random colors
      while (colorSet.size < array.length) {
        const newColor = randomColor();
        // Ensure generated color is not black and is unique
        if (newColor !== '#000000' && !colorSet.has(newColor)) {
          colorSet.add(newColor);
        }
      }
    
      // Convert set to array and return colors
      colors.push(...colorSet);
      return colors;
    }
  
    useEffect(() => {
      getFiltredData();
    }, [lists]);
  
    return (
      <>
        <div className="flex-1">
          <div className="w-full text-center mt-4 font-bold text-lg">Outbox</div>
          <div className="mt-5 flex gap-4">
            <ul class="bg-white rounded-lg divide-y w-[200px] divide-gray-200 p-1">
            {messages.length != 0 ? (
              messages.map((message, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleMessageClick(message)}
                    className="px-2 flex items-center w-full space-between mb-2 hover:shadow hover:bg-violet-100 focus:bg-violet-100 py-2"
                  >
                    <div
                      className={`text-center items-center p-2 m-1 rounded-full w-10 h-10`}
                      style={{ backgroundColor: allcolors[index] }}
                    >
                      {message.subject[0]}
                    </div>
                    <div className="px-2 w-[85%] truncate">
                      <span className="font-bold">{message.subject}</span>
                      <p>{message.body}</p>
                    </div>
                  </li>
                );
              })
            ) : (
              <div className="text-center">No Messages</div>
            )}
            </ul>

            {selectedMessage == null ? (<>
            <div className="flex flex-col h-[90vh] pl-[350px] gap-4 md-[100px] justify-center items-center text-center">
              <span className="text-bold text-base text-black-500 font-bold">Select an item to read</span>
            <i class="fa-regular fa-message text-[80px] text-cyan-800"></i>
              <span className="text-base text-cyan-700">Nothing selected</span>
            </div>
            </>) : ""}
            {selectedMessage && (
        <div className="flex flex-col gap-4">
          <h2 className="text-center w-full py-2 shadow">{selectedMessage.subject}</h2>
         <div className="w-full flex flex-col justify-between  p-2 shadow w-[60vw] h-[70vh]">
         <div className="flex flex-col gap-10">
         <div className="flex justify-between">
          <div>
          <span>{`${userDetails.firstName} ${userDetails.lastName}`}</span>
          <p>To: {selectedMessage.to}</p>
          </div>
          <div className="flex gap-5">
          <i class="fa-solid fa-tent-arrow-turn-left text-blue-500 text-lg"></i>
          <i class="fa-solid fa-share text-red-500 text-lg"></i>
            <i class="fa-solid fa-trash-can text-lg"></i>
            </div>
         </div>
          <p>{selectedMessage.body}</p>
         </div>
         <div className="flex gap-4">
          <button className="px-8 items-center justify-end py-2 shadow flex gap-2 hover:bg-gray-200">
          <i class="fa-solid fa-tent-arrow-turn-left text-blue-500"></i>
          <span>Reply</span>
          </button>
          <button className="px-8 items-center justify-end py-2 shadow flex gap-2 hover:bg-gray-200">
          <i class="fa-solid fa-share text-red-500"></i>
          <span>Foward</span>
          </button>
         </div>
         </div>
        </div>
      )}
          </div>
        </div>
      </>
    );
};
