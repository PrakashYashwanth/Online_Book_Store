import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";

export default function LoginPage() {
  const [displaySignup, setDisplaySignup] = useState(false);

  const displayingSignup = (value) => setDisplaySignup(value);

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "50vw" }}>
        {displaySignup ? (
          <SignupForm displayingSignup={displayingSignup} />
        ) : (
          <LoginForm displayingSignup={displayingSignup} />
        )}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "50vw", height: "80vh" }}
        image="images/book-image.jpg"
        alt="Book cover"
      />
    </Card>
  );
}
