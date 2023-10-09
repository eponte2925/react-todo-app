import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{
        mx: "auto",
        p: 1,

        bgcolor: "#232323",
        color: "grey.300",
        border: "1px solid",
        borderColor: "grey.800",
        borderRadius: 2,

        width: "1",
      }}
    >
      <Grid item xs>
        <TextField
          fullWidth
          label="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </Grid>
      <Grid item style={{ width: "100px" }}>
        <Button
          //fullWidth
          variant="outlined"
          startIcon={<Add />}
          onClick={handleAddTodo}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
