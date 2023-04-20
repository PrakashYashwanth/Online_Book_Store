import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { BookContext } from "../../store/contextStore";
import { Button, useMediaQuery } from "@mui/material";
import {
  addBookToCart,
  removeBookFromCart,
  removeBookPreview,
} from "../../store/books/actions";
import {
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  REMOVE_BOOK_PREVIEW,
} from "../../store/books/constants";

export default function BookPreview() {
  const [state, dispatch] = useContext(BookContext);
  const navigate = useNavigate();
  const MdMatches = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleAddToCart = () => {
    dispatch(
      addBookToCart({
        type: ADD_BOOK_TO_CART,
        payload: { ...state.bookToDisplay, count: 0 },
      })
    );
  };
  const handleRemoveFromCart = () => {
    dispatch(
      removeBookFromCart({
        type: REMOVE_BOOK_FROM_CART,
        payload: state.bookToDisplay.id,
      })
    );
  };

  const handleGoBack = () => {
    dispatch(
      removeBookPreview({
        type: REMOVE_BOOK_PREVIEW,
      })
    );
    navigate("/home");
  };

  useEffect(() => {
    if (!state.bookToDisplay) navigate("/home");
  }, []);

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: `${MdMatches ? "wrap" : "nowrap"}`,
        mt: "2rem",
        padding: "2rem",
      }}
    >
      <CardMedia
        component="img"
        image={state.bookToDisplay?.cover_image || "/images/defaultBookImg.jpg"}
        alt="Book cover img"
        sx={{ width: "500px", height: "400px" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            sx={{ mb: "2rem", mt: "1rem" }}
          >
            {state.bookToDisplay?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            praesentium minus possimus iure quidem eligendi eius soluta
            voluptatibus veniam, molestiae nulla, accusantium nesciunt
            necessitatibus fuga minima, obcaecati atque quae vitae. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Totam perferendis qui
            cum tempora? Accusamus dignissimos provident, exercitationem
            voluptate quo molestias illum neque soluta, officiis velit
            voluptates illo reprehenderit ipsa perspiciatis. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Nihil exercitationem vel
            deserunt modi commodi minus numquam atque excepturi quos odio?
            Temporibus labore libero distinctio delectus provident voluptatibus
            minus perferendis fugiat?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pl: 1,
              pb: 1,
              mt: "2rem",
            }}
          >
            <Button
              variant="contained"
              onClick={handleGoBack}
              sx={{ mr: "1rem" }}
            >
              Go Back
            </Button>
            {!state.booksAddedToCart?.some(
              (bookItem) => bookItem.id === state.bookToDisplay.id
            ) ? (
              <Button
                size="small"
                variant="contained"
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            ) : (
              <Button
                size="small"
                variant="outlined"
                onClick={handleRemoveFromCart}
              >
                Remove From cart
              </Button>
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
