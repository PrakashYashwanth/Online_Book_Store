import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../store/contextStore";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [state] = useContext(BookContext);
  const [isLoading, setIsLoading] = useState(true);
  const [booksData, setBooksData] = useState([]);
  const navigate = useNavigate();

  const getBooksData = async () => {
    try {
      const res = await axios.get(
        "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"
      );
      setBooksData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!state.authorizationToken) {
      navigate("/");
    } else {
      getBooksData();
    }
  }, [state.authorizationToken]);

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
    <div>
      {booksData.map((book) => (
        <div key={book.id}>
          <p>ID: {book.id}</p>
          <p>Author ID: {book.author_id}</p>
          <p>Title: {book.title}</p>
          <p>Cover Img: {book.cover_image}</p>
          <p>Pages: {book.pages}</p>
          <p>Release Date: {book.releaseDate}</p>
          <p>ISBN: {book.isbn}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
