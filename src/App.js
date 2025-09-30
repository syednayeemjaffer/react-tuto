// App.js
import React, { use, useState } from "react";
import Homework2 from "./component/Homework2";
import TodoApp from './component/TodoApp';
import MessageInput from "./component/MessageInput";
import MessageList from "./component/MessageList";
import Submit from "./component/Submit";
import Homework1 from "./component/Homework1";
import Fetch from "./component/Fetch";

function App() {
  // const [messages, setMessages] = useState([]);

  // const addMessage = (newMsg) => {
  //   setMessages([...messages, newMsg]);
  // };
  
 
  return (
    <div className="App">
      <Homework1/>
      {/* <TodoApp/> */}
      {/* <MessageInput addMessage={addMessage} />
      <MessageList messages={messages} /> */}
      {/* <Submit/> */}
      <Fetch/>
    </div>
  );
}

export default App;
