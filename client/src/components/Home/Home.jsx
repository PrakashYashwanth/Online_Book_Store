import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/contextStore";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import CardComponent from "../CardComponent/CardComponent";
import "./Home.scss";

const Home = () => {
  const [state] = useContext(UserContext);
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
    <div className="bookCards">
      {booksData.map((book) => (
        <CardComponent book={book} key={book.id} />
      ))}
    </div>
  );
};

export default Home;
