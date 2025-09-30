import React, { useRef, useState } from "react";

const UseRef = () => {
  const [add, setAdd] = useState(0);
  const ref = useRef(0);

  const handlerFunc = () => {
    ref.current++;
    console.log("usestate: ", add);
    console.log("useref: ", ref.current);
  };

  return (
    <div>
      <button onClick={handlerFunc}>Add</button>
      <h1>{ref.current}</h1>
    </div>
  );
};

export default UseRef;
