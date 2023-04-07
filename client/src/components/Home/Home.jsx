import React, { useContext, useEffect, useState } from "react";
import { BookContext, UserContext } from "../../store/contextStore";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import CardComponent from "../CardComponent/CardComponent";
import "./Home.scss";
import { addBooks } from "../../store/books/actions";
import { ADD_BOOKS } from "../../store/books/constants";

const Home = () => {
  const [userState] = useContext(UserContext);
  const [bookState, bookDispatch] = useContext(BookContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const getBooksData = async () => {
    try {
      const res = await axios.get(
        "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"
      );
      bookDispatch(
        addBooks({
          type: ADD_BOOKS,
          payload: res.data,
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!userState.authorizationToken) {
      navigate("/");
    } else {
      if (!bookState.booksData.length) getBooksData();
      else setIsLoading(false);
    }
  }, [userState.authorizationToken]);

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress
          sx={{
            height: "8rem !important",
            width: "8rem !important",
            mt: "30vh",
          }}
        />
      </Box>
    );

  return (
    <div className="bookCards">
      {bookState.booksData.map((book) => (
        <CardComponent book={book} key={book.id} />
      ))}
    </div>
  );
};

export default Home;
