import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SignupForm";
import { UserContext } from "../../store/contextStore";
import { addAuthToken } from "../../store/user/actions";
import { SET_AUTHORIZATION_TOKEN } from "../../store/user/constants";

export default function LoginPage() {
  const [displaySignup, setDisplaySignup] = useState(false);
  const [_, dispatch] = useContext(UserContext);
  const SmMatches = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const navigate = useNavigate();

  const displayingSignup = (value) => setDisplaySignup(value);

  useEffect(() => {
    const token = sessionStorage.getItem("Auth_Token");
    if (token) {
      dispatch(
        addAuthToken({
          type: SET_AUTHORIZATION_TOKEN,
          token,
        })
      );
      navigate("/home");
    }
  }, []);

  return (
    <Card sx={{ display: `${SmMatches ? "block" : "flex"}` }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: `${SmMatches ? "auto" : "50vw"}`,
        }}
      >
        {displaySignup ? (
          <SignupForm displayingSignup={displayingSignup} />
        ) : (
          <LoginForm displayingSignup={displayingSignup} />
        )}
      </Box>
      {!SmMatches && (
        <CardMedia
          component="img"
          sx={{ width: "50vw", height: "80vh" }}
          image="images/book-image.jpg"
          alt="Book cover"
        />
      )}
    </Card>
  );
}
