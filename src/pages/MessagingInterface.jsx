import React, { useState } from 'react';
import { FaUserCircle, FaPaperPlane, FaRegSmile } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import TravelProviderSidebadr from '../component/TravelProviderSidebadr';
import EmojiPicker from 'emoji-picker-react'; // Import Emoji Picker

const users = [
  { id: 1, name: "John Doe", status: "Traveler" },
  { id: 2, name: "Abebe Kebede", status: "Traveler" },
];

const initialMessages = [
  { id: 1, user: "John Doe", text: "Hi", align: "right" },
  { id: 2, user: "John Doe", text: "Hello There!", align: "left" },
];

const MessageSidebar = ({ users, onUserSelect }) => (
  <div className="w-64 bg-white border-r p-4">
    <h2 className="text-lg font-semibold mb-4">Messages</h2>
    <div className="flex items-center gap-2 mb-2">
      <button className="px-3 py-1 bg-blue-500 text-white rounded-md">Customers</button>
      <button className="px-3 py-1 border rounded-md">Admins</button>
    </div>
    <div className="mt-4">
      {users.map(user => (
        <div 
          key={user.id} 
          onClick={() => onUserSelect(user)}
          className="flex items-center gap-2 mb-4 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <FaUserCircle className="text-2xl" />
          <div>
            <h3 className="text-sm font-medium">{user.name}</h3>
            <p className="text-xs text-gray-500">{user.status}</p>
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
    <div className="flex-grow bg-white p-4 relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl" />
          <div>
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
        <AiOutlineSearch className="text-2xl text-gray-500" />
      </div>
      <div className="flex flex-col gap-4 mb-4 h-[calc(100vh-200px)] overflow-auto">
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.align === 'right' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg text-white ${message.align === 'right' ? 'bg-blue-500' : 'bg-blue-300'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Write message..." 
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow p-2 border rounded-md"
          />
          <div className="relative">
            <FaRegSmile 
              className="text-2xl text-gray-500 cursor-pointer" 
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && (
              <div className="absolute bottom-12 right-0">
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
          <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded-full">
            <FaPaperPlane className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

const MessagingInterface = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]); // Default to first user
  const [messages, setMessages] = useState(initialMessages);

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

  return (
    <>
      <TravelProviderSidebadr />
      <div className="flex h-screen ml-72">
        <MessageSidebar users={users} onUserSelect={handleUserSelect} />
        <MessageWindow messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </>
  );
};

export default MessagingInterface;
