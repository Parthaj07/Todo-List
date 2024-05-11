import React, { useState } from "react";
import Button from "./components/Button";
import TodoRow from "./components/TodoRow";
import styled from "styled-components";

import {
  StyledInput,
  TodoListContainer,
  TodoHeading,
} from "./styles/Todostyles";

const Todo = styled.div`
  margin-left: -5px;
  margin-bottom: 60px;
  p {
    margin-left: 13px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ text: string; isCompleted: boolean }[]>(
    []
  );
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      setTodos([...todos, { text: newTodoText, isCompleted: false }]);
      setNewTodoText("");
    }
  };

  const handleDeleteTodo = (todoText: string) => {
    setTodos(todos.filter((todo) => todo.text !== todoText));
  };

  const handleToggleComplete = (todoText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.text === todoText
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  return (
    <TodoListContainer>
      <TodoHeading> Todo </TodoHeading>
      <Todo>
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo) => (
              <TodoRow
                key={todo.text}
                text={todo.text}
                isCompleted={todo.isCompleted}
                onDelete={() => handleDeleteTodo(todo.text)}
                onToggleComplete={() => handleToggleComplete(todo.text)}
              />
            ))}
          </ul>
        ) : (
          <p>No todos yet!</p>
        )}
      </Todo>
      <hr
        style={{
          width: "354px",
          marginLeft: "-20.5px",
          border: "0",
          height: "1px",
          backgroundColor: "black",
        }}
      />

      <StyledInput
        type="text"
        value={newTodoText}
        onChange={handleInputChange}
        placeholder="Add task here..."
      />
      <Button variant="big" onClick={handleAddTodo}>
        Add
      </Button>
    </TodoListContainer>
  );
};

export default App;
