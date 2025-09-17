import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() == "") return;
    const isDuplicate = task.some(todo => todo.text === input.trim())
    if(isDuplicate){
        alert("Task already exits!")
        return
    }
    if(task.length > 4 ){
         alert(`You can only have a maximum of 5 tasks.`);
         setInput('')
      return;
    }
    if (editIndex !== null) {
      console.log("inside edit");
      const updatedTodo = [...task];
      updatedTodo[editIndex] = input;
      setTask(updatedTodo);
      setEditIndex(null);
    } else {
      setTask([...task, input]);
    }
   
    setInput("");
  };

  const handleUpdate = (index) => () => {
    setInput(task[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => () => {
    const deleteTask = task.filter((_i, id) => id !== index);
    setTask(deleteTask);
  };

  return (
    <div className="m-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="border-1 mr-2 border-white rounded-2xl p-2"
        />

        <button
          type="submit"
          className="rounded-2xl border-1 border-green-500 px-2 py-1"
        >
          {editIndex !== null ? "update" : "Submit"}
        </button>
      </form>
      <div>
        <ul className="flex flex-col gap-2 mt-3">
          {task.map((item, index) => (
            <li key={index}>
              {item}
              <button
                className="mx-2 bg-green-500 px-4 py-1 rounded-2xl "
                onClick={handleUpdate(index)}
              >
                Edit
              </button>
              <button
                className="mx-2 bg-red-500 px-2 py-1 rounded-2xl "
                onClick={handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
