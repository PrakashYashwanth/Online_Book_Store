import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../store/contextStore";
import { useNavigate } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
  const [state] = useContext(BookContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.authorizationToken) {
      navigate("/");
    }
    setIsLoading(false);
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

  return <div>Welcome to the Book Store</div>;
};

export default Home;
