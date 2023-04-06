import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import {
  BookContext,
  UserContext,
  initialBookState,
  initialUserState,
} from "./store/contextStore";
import BookPreview from "./components/BookPreview/BookPreview";
import UserReducer from "./store/user/reducer";
import BookReducer from "./store/books/reducer";

const theme = createTheme();

const App = () => {
  const [userState, userDispatch] = useReducer(UserReducer, initialUserState);
  const [bookState, bookDispatch] = useReducer(BookReducer, initialBookState);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <BookContext.Provider value={[bookState, bookDispatch]}>
          <UserContext.Provider value={[userState, userDispatch]}>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/bookpreview" element={<BookPreview />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </UserContext.Provider>
        </BookContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default App;
