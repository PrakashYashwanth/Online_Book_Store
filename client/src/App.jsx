import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

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
