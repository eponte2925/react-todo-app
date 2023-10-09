import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import TodoList from "./components/TodoList";

function App() {
  const darkTheme = createTheme({
    palette: { mode: "dark" },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 1,

            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Todo List</h1>
          <TodoList />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
