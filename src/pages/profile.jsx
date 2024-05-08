import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../components/sidebar";

export const Profile = () => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("userDetails");

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  const user = JSON.parse(userData);

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar />

        <section className="w-full overflow-hidden dark:bg-gray-900 pt-[100px]">
          <div className="flex flex-col">
            <div className="shadow-2xl border rounded p-2 xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
              <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          First Name
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user.firstName}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Last Name
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user.lastName}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Date Of Birth
                        </dt>
                        <dd className="text-lg font-semibold"></dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Gender
                        </dt>
                        <dd className="text-lg font-semibold"></dd>
                      </div>
                    </dl>
                  </div>
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          User Name
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user.userName}
                        </dd>
                      </div>

                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Location
                        </dt>
                        <dd className="text-lg font-semibold"></dd>
                      </div>

                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Phone Number
                        </dt>
                        <dd className="text-lg font-semibold"></dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Email
                        </dt>
                        <dd className="text-lg font-semibold">{user.email}</dd>
                      </div>

                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Website
                        </dt>
                        <dd className="text-lg font-semibold"></dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              <button
                disabled
                className="px-8 items-center justify-end py-2 shadow flex gap-2 hover:bg-sky-600 bg-cyan-500 rounded"
              >
                <i class="fa-regular fa-pen-to-square"></i>
                <span>Edit</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
