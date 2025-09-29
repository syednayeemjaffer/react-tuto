import React, { useState } from "react";

const Homework2 = () => {
    const [show,setShow] = useState([]);
    const [data,setData] = useState({});

    const submitData = (e) =>{
        setShow([...show,data]);
        setData({});
    }

  return (
    <div>
      <h1>Homework2</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>

        <div>
          <label>Name:</label>
          <input type="text" />
        </div>

        <div>
          <label>Name:</label>
          <input type="text" />
        </div>

        <button type="submit" onClick={submitData}>Submit</button>
      </form>

      <ul>
        <li>item1</li>
      </ul>
    </div>
  );
};

export default Homework2;
