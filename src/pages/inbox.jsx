import React from "react";

export const Inbox = ({ sidebarToggle, setsetUserPage }) => {
  return (
    <>
      <div
        className={`${
          sidebarToggle ? "" : "ml-[5px]"
        } w-98px mx-10 bg-white p-2 rounded-lg`}
      >
        <p className="text-lg text-black font-semibold">Email Title</p>
        <hr className="bg-white-500 h-1" />
      </div>

      <div
        className={`${
          sidebarToggle ? "" : "ml-[5px]"
        } w-89 text-center mx-10 pb-10 mt-2`}
      >
        <div
          className={`${
            sidebarToggle ? "" : "w-89"
          } w-full h-[70vh] border rounded-lg text-left overflow-hidden  bg-white`}
        >
          <p className="text-base leading-normal overflow-hidden p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            alias ratione dolorem nobis. Rerum, laudantium minus. Ad molestias
            repudiandae quasi quo porro distinctio qui id sed ipsam culpa.
            Consectetur dolorum sint consequuntur beatae expedita facere natus
            ad eaque, quaerat animi tempora quo veritatis obcaecati a! Natus
            voluptas reprehenderit autem excepturi.
          </p>
        </div>
      </div>

      <div className={`${sidebarToggle ? "" : "ml-5"} w-89 text-center mx-10 `}>
        <p className="text-gray-500">D'Mailer 2024&#174;</p>
      </div>
    </>
  );
};
