import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState(""); // Declare a state variable 'text' and its update function 'setText'
  const [todos, setTodos] = useState([]); // Declare a state variable 'todos' and its update function 'setTodos'
  const [completed, setCompleted] = useState(false);

  // Function to add the text from the 'text' state variable to the 'todos' state variable
  function add() {
    setTodos([...todos, { text, completed: false }]); // Spread operator is used to create a new array with existing todos and the new text
  }

  // Function to handle the change in the input field and update the 'text' state variable
  function handleOnChange(e) {
    setText(e.target.value); // Update the 'text' state variable with the input field's value
  }

  // Function to remove a todo item from the 'todos' state variable based on its index
  function remove(index) {
    let newArray = todos.filter((el, i) => i !== index); // Filter out the todo item at the specified index
    setTodos(newArray); // Update the 'todos' state variable with the filtered array
  }

  function toggleCompleted(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  // Render the component
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {/* Map over the 'todos' array and render each todo item as an <li> element */}
        {todos.map((data, index) => (
          <li
            key={index}
            style={{ textDecoration: data.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={data.completed}
              onChange={() => toggleCompleted(index)}
            />
            {data.text} {/* Extract the 'text' property here */}
            <button onClick={() => remove(index)}>-</button>
          </li>
        ))}
      </ul>
      {/* Input field to enter todo text, with 'handleOnChange' function as the onChange event handler */}
      <input onChange={handleOnChange} />
      {/* Button to add the todo text to the 'todos' array, with 'add' function as the onClick event handler */}
      <button onClick={add}>Add</button>
    </div>
  );
}
