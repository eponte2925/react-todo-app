import React, { useState } from "react";
import { TextField, Grid, Checkbox, IconButton } from "@mui/material";
import { Delete, Edit, Done } from "@mui/icons-material";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditTodo = () => {
    setIsEditing(true);
  };

  const handleSaveTodo = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{
        p: 1,
      }}
    >
      <Grid item style={{ width: "50px" }}>
        <Checkbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Grid>
      {isEditing ? (
        <>
          <Grid item xs>
            <TextField
              fullWidth
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </Grid>

          <Grid item style={{ width: "72px" }}>
            <IconButton
              aria-label="save"
              size="large"
              color="primary"
              onClick={handleSaveTodo}
            >
              <Done />
            </IconButton>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs>
            <span>{todo.text}</span>
          </Grid>
          <Grid item style={{ width: "50px" }}>
            <IconButton
              aria-label="edit"
              size="large"
              color="primary"
              onClick={handleEditTodo}
            >
              <Edit />
            </IconButton>
          </Grid>
          <Grid item style={{ width: "50px" }}>
            <IconButton
              aria-label="delete"
              size="large"
              color="primary"
              onClick={() => onDelete(todo.id)}
            >
              <Delete />
            </IconButton>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default TodoItem;
