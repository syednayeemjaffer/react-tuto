import React, { useState } from "react";

const Homework2 = () => {
  const [show, setShow] = useState([]);
  const [data, setData] = useState({});

  const submitData = (e) => {
    e.preventDefault();
    setShow([...show, data]);
  };

  return (
    <div>
      <h1>Homework2</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            id="i1"
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, name: e.target.value });
            }}
          />
        </div>

        <div>
          <label>age:</label>
          <input
            id="i2"
            type="number"
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, age: e.target.value });
            }}
          />
        </div>

        <div>
          <label>hobbie:</label>
          <input
            id="i3"
            type="text"
            onChange={(e) => {
              e.preventDefault();
              setData({ ...data, hobbie: e.target.value });
            }}
          />
        </div>

        <button type="submit" onClick={submitData}>
          Submit
        </button>
      </form>

      <ul>
        {show.map((item, index) => {
          return (
            <li key={index}>
              Name: {item.name} | age: {item.age} | hobbie: {item.hobbie}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Homework2;
