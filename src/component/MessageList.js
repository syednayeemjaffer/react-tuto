import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div>
      <h1>List</h1>
      <ul>
        {messages.map((m, index) => (
          <li key={index}>{m}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
