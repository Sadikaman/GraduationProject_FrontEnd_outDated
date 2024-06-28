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
        <section className="flex flex-col">
            <TravelProviderSidebadr />
            {/* Top section */}
            <div className="flex justify-center w-full border-b-2 border-b-gray-400">
                <div className="flex mt-5 gap-[900px] overflow-hidden">
                    <h1 className="flex text-black text-2xl font-bold gap-2">
                        <IoIosNotificationsOutline className="text-2xl" />
                        Notification
                    </h1>
                    <div className="flex dark:bg-gray-900 w-full p-4">
                        <FaUserCircle className="text-4xl" />
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
            </div>
            {/* Delete All button */}
            <div className="flex justify-center ml-[880px] mt-7">
                <button 
                    className="gap-2 bg-red-700 rounded-md p-2 text-white flex"
                    onClick={handleDeleteAll}
                >
                    <IoIosNotificationsOutline className="text-2xl" />
                    Delete all
                </button>
            </div>
            {/* Notifications list */}
            <div className="flex justify-center mt-10">
                <div className="flex flex-col gap-10 w-[1000px]">
                    {notifications.length === 0 ? (
                        <div className="text-center text-gray-500">No notifications available.</div>
                    ) : (
                        notifications.map((notification) => (
                            <div
                                key={notification.id}
                                id="toast-default"
                                className="flex bg-slate-300 items-center w-full gap-5 p-2 text-gray-500 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                                role="alert"
                            >
                                <input className="rounded-lg w-6 h-6 bg-slate-300" type="checkbox" name="" id="" />
                                <IoIosNotificationsOutline className="text-2xl" />
                                <div className="ms-3 text-sm font-normal">{notification.message}</div>
                                <button
                                    type="button"
                                    onClick={() => handleClose(notification.id)}
                                    className="ml-[600px] text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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
        </section>
        </DarkModeProvider>
    );
};

export default Notification;
