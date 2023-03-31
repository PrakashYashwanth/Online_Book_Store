import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import { BookContext, initialState } from "./store/contextStore";
import Reducer from "./store/reducer";

const theme = createTheme();

const App = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BookContext.Provider value={[state, dispatch]}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BookContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
