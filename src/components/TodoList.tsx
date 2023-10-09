import React, { useState, useEffect } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Paper,
} from "@mui/material";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return JSON.parse(savedTodos || "[]");
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (text.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text,
          completed: false,
        },
      ]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      justifyContent="flex-start"
      alignItems="center"
      sx={{ p: 1, width: "1", maxWidth: 1200 }}
    >
      <Grid
        item
        sx={{
          width: 1,
        }}
      >
        <AddTodo onAdd={addTodo} />
      </Grid>
      <Grid
        item
        sx={{
          width: 1,
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            bgcolor: "#111111",
            color: "grey.300",
            border: "1px solid",
            borderColor: "grey.800",
            borderRadius: 2,
            width: 1,
          }}
        >
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default TodoList;
