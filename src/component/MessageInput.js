import React, { useState } from 'react';

const MessageInput = ({ addMessage }) => {
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim() !== "") {
      addMessage(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>Message Input</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button> 
    </div>
  );
};

export default MessageInput;
