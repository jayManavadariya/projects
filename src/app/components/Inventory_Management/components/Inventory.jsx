"use client";
import React, { useEffect, useState } from "react";

const Inventory = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

    // const 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setItems(data));
  });

  //   const handleSubmit = () => {
  //     setItems([...items, input]);
  //     setInput("")
  //   };

  const handleDelete = (id) => () => {
    const deleteItem = items.filter((_, i) => id !== i)
    setItems(deleteItem)
  };

  return (
    <div>
      <input
        className="border-1 border-white"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <table>
        <thead className="border-1 border-white">
          <tr>
            <th className="border-1 p-2 border-white">ID</th>
            <th className="border-1 p-2 border-white">Title</th>
            {/* <th>UserId</th> */}
            <th className="border-1 p-2 border-white">Button</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index) => (
            <tr key={item.id}>
              <td className="border-1 p-2 border-white">{item.id}</td>
              <td className="border-1 p-2 border-white">{item.title}</td>
              {/* <td>{item.userId}</td> */}
              <td className="border-1 p-2 border-white">
                <button onClick={handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
