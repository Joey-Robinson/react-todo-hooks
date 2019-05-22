import React, { useState } from "react"
import Form from "./Form"

const App = () => {
  const [todos, setTodos] = useState([])

  const toggleComplete = index =>
    setTodos(
      todos.map((todo, current) =>
        current === index
          ? {
              ...todo,
              complete: !todo.complete
            }
          : todo
      )
    )

  return (
    <div className="App">
      <button onClick={() => setTodos([])}>Clear All</button>
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, index) => (
          <div
            key={text}
            onClick={() => toggleComplete(index)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
