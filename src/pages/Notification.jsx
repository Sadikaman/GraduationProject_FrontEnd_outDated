import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import { Dropdown } from 'flowbite-react';
import TravelProviderSidebadr from '../component/TravelProviderSidebadr';
import { DarkModeProvider } from '../component/DarkModeProvider';

const Notification = () => {
  const initialNotifications = [
    { id: 1, message: 'Set yourself free.' },
    { id: 2, message: 'Be the change you wish to see in the world.' },
    // Add more notifications as needed
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const handleClose = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const handleDeleteAll = () => {
    setNotifications([]);
  };

  return (
    <DarkModeProvider>
      <section className="flex flex-col lg:flex-row overflow-hidden h-screen dark:bg-gray-900">
        <TravelProviderSidebadr />
        <div className="flex flex-col w-full  p-4 ">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4 border-b-2">
            <h1 className="flex items-center text-black dark:text-[#ffffff] text-2xl font-bold gap-2">
              <IoIosNotificationsOutline className="text-2xl" />
              Notification
            </h1>
            <div className="flex items-center dark:bg-gray-900 p-4 mt-4 sm:mt-0">
              <FaUserCircle className="text-4xl mr-2" />
              <Dropdown inline label="Jeremy Zuck">
                <Dropdown.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Edit
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Export Data
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Delete
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>

          <div className="flex justify-center mt-7">
            <button
              className="flex items-center gap-2 bg-red-700 rounded-md p-2 text-white"
              onClick={handleDeleteAll}
            >
              <IoIosNotificationsOutline className="text-xl" />
              Delete all
            </button>
          </div>

          <div className="flex justify-center mt-10  dark:bg-gray-900">
            <div className="flex flex-col gap-5 w-full max-w-4xl px-4">
              {notifications.length === 0 ? (
                <div className="text-center text-gray-500">No notifications available.</div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    id="toast-default"
                    className="flex items-center gap-5 p-4 bg-slate-300 text-gray-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                  >
                    <input className="rounded-lg w-6 h-6 bg-slate-300" type="checkbox" />
                    <IoIosNotificationsOutline className="text-2xl" />
                    <div className="flex-1 text-sm font-normal">{notification.message}</div>
                    <button
                      type="button"
                      onClick={() => handleClose(notification.id)}
                      className="text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                      aria-label="Close"
                    >
                      <span className="sr-only">Close</span>
                      <MdDeleteOutline className="text-2xl bg-red-500 text-white rounded-sm" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </DarkModeProvider>
  );
};

export default Notification;
