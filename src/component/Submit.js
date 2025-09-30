import React, { useState , useEffect} from "react";

const Submit = () => {
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState({ topic: "", name: "", year: "" });

  function addBook(e) {
    e.preventDefault(); // prevent form reload
    if (book.topic && book.name && book.year) {
      setBookList([...bookList, book]);
      setBook({ topic: "", name: "", year: "" });
    }
  }

  function forInput(e) {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  useEffect(() => {
  const interval = setInterval(() => console.log("Tick"), 1000);

  return () => clearInterval(interval); // cleanup on unmount
}, []);


  return (
    <div>
      <form onSubmit={addBook}>
        <input
          name="topic"
          type="text"
          value={book.topic}
          onChange={forInput}
          placeholder="Book Topic"
        />
        <input
          name="name"
          type="text"
          value={book.name}
          onChange={forInput}
          placeholder="Author Name"
        />
        <input
          name="year"
          type="number"
          value={book.year}
          onChange={forInput}
          placeholder="Year"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {bookList.map((i, n) => (
          <li key={n}>
            {i.topic} | by | {i.name} | , {i.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submit;
