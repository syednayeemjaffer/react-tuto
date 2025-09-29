import React, { useState } from 'react'

function TodoApp() {
    const [todo,setTodo] = useState([]);
    const [task , setTask] = useState('');

    function addTask(){
        setTodo([...todo,task])
        setTask('');
    }
  return (
    <div>
        <h1>todo app</h1>
        <input onChange={(e) => setTask(e.target.value)}/>
        <button onClick={addTask}>add</button>
    <ul>
        {todo.map((item,index) => {
          return <li key = {index}>{item}</li>
        })}
    </ul>

    </div>
  )
}

export default TodoApp