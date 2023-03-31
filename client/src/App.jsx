import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";

const theme = createTheme();

const App = () => {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <NavBar />
        <LoginPage />
      </ThemeProvider>
    </div>
  );
};

export default App;
