import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle, FaPaperPlane, FaRegSmile, FaGreaterThan, FaTimes } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import EmojiPicker from 'emoji-picker-react'; // Import Emoji Picker
import { DarkModeProvider } from '../component/DarkModeProvider';
import TravelProviderSidebadr from '../component/TravelProviderSidebadr';

const users = [
  { id: 1, name: "John Doe", status: "Traveler" },
  { id: 2, name: "Abebe Kebede", status: "Traveler" },
];

const initialMessages = [
  { id: 1, user: "John Doe", text: "Hi", align: "right" },
  { id: 2, user: "John Doe", text: "Hello There!", align: "left" },
];

const MessageSidebar = ({ users, onUserSelect }) => (
  <div className="w-full sm:w-64 bg-white h-full dark:bg-gray-800 border-r p-4 sm:flex-shrink-0">
    <h2 className="text-lg font-semibold mb-4 dark:text-white">Messages</h2>
    <div className="flex items-center gap-2 mb-2">
      <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Customers</button>
      <button className="px-3 py-1 border rounded-md dark:text-white">Admins</button>
    </div>
    <div className="mt-4">
      {users.map(user => (
        <div 
          key={user.id} 
          onClick={() => onUserSelect(user)}
          className="flex items-center gap-2 mb-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
        >
          <FaUserCircle className="text-2xl dark:text-gray-300" />
          <div>
            <h3 className="text-sm font-medium dark:text-white">{user.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{user.status}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MessageWindow = ({ messages, onSendMessage }) => {
  const [messageText, setMessageText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (messageText.trim() !== "") {
      onSendMessage(messageText);
      setMessageText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setMessageText((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="flex-grow bg-white dark:bg-gray-900 p-6  flex flex-col h-[calc(100vh-112px)]">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl dark:text-gray-300" />
          <div>
            <h3 className="font-semibold text-lg dark:text-white">John Doe</h3>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
        <AiOutlineSearch className="text-2xl text-gray-500 dark:text-gray-300" />
      </div>
      <div className="flex-grow overflow-auto mb-4">
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.align === 'right' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg text-white ${message.align === 'right' ? 'bg-blue-500' : 'bg-blue-300'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input 
          type="text" 
          placeholder="Write message..." 
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow p-2 border rounded-md dark:bg-gray-700 dark:text-white"
        />
        <div className="relative">
          <FaRegSmile 
            className="text-2xl text-gray-500 dark:text-gray-300 cursor-pointer" 
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
          {showEmojiPicker && (
            <div className="absolute bottom-12 right-0 z-50">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-full">
          <FaPaperPlane className="text-xl" />
        </button>
      </div>
    </div>
  );
};

const TpMessagingInterface = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]); // Default to first user
  const [messages, setMessages] = useState(initialMessages);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    // Here you might fetch or load messages related to the selected user
  };

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      user: selectedUser.name,
      text,
      align: 'right', // Adjust as per your design
    };
    setMessages([...messages, newMessage]);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <DarkModeProvider>
        <section className="flex w-full h-screen">
          <div className="hidden lg:flex flex-shrink-0">
            <TravelProviderSidebadr />
          </div>
          <div className="lg:hidden relative">
            <button 
              className="fixed top-[112px] left-1 dark:text-white text-[#101010] p-2 rounded-md z-50"
              onClick={(e) => {
                setIsSidebarOpen(!isSidebarOpen);
                e.stopPropagation(); // Prevents the click from closing the sidebar immediately
              }}
            >
              {isSidebarOpen ? <FaTimes /> : <FaGreaterThan />}
            </button>
            {isSidebarOpen && (
              <div
                ref={sidebarRef}
                className="fixed top-0 left-0 h-full z-40 bg-gray-900  transition-all duration-300"
              >
                <TravelProviderSidebadr />
              </div>
            )}
          </div>
          <div className="flex flex-col lg:flex-row w-full h-screen">
            <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block lg:w-64 flex-shrink-0`}>
              <MessageSidebar users={users} onUserSelect={handleUserSelect} />
            </div>
            <MessageWindow messages={messages} onSendMessage={handleSendMessage} />
          </div>
        </section>
      </DarkModeProvider>
    </>
  );
};

export default TpMessagingInterface;
