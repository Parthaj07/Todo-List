import React, { useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import styled from "styled-components";

interface TodoRowProps {
  text: string;
  isCompleted?: boolean;
  onDelete?: () => void;
  onToggleComplete?: () => void;
}

const TodoRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  .todo-text.completed {
    text-decoration: line-through;
    color: #aaa;
  }

  .todo-text {
    flex-grow: 1;
    text-decoration: none;
  }
`;

const TodoRowComponent: React.FC<TodoRowProps> = ({
  text,
  isCompleted,
  onDelete,
  onToggleComplete,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <TodoRow onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Checkbox isChecked={isCompleted} onClick={onToggleComplete} />
      <span className={`todo-text ${isCompleted ? "completed" : ""}`}>
        {text}
      </span>
      <div className="actions">
        {isHovering && (
          <Button variant="small" onClick={onDelete}>
            X
          </Button>
        )}
      </div>
    </TodoRow>
  );
};

export default TodoRowComponent;
