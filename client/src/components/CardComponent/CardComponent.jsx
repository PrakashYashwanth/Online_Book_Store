import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BookContext } from "../../store/contextStore";
import {
  addBookToCart,
  removeBookFromCart,
  setBookPreview,
} from "../../store/books/actions";
import {
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  SET_BOOK_PREVIEW,
} from "../../store/books/constants";

const CardComponent = ({ book }) => {
  const [state, dispatch] = useContext(BookContext);
  const navigate = useNavigate();
  const handleLearnMore = () => {
    dispatch(
      setBookPreview({
        type: SET_BOOK_PREVIEW,
        payload: book,
      })
    );
    navigate("/bookpreview");
  };
  const handleAddToCart = () => {
    dispatch(
      addBookToCart({
        type: ADD_BOOK_TO_CART,
        payload: { ...book, count: 1 },
      })
    );
  };
  const handleRemoveFromCart = () => {
    dispatch(
      removeBookFromCart({
        type: REMOVE_BOOK_FROM_CART,
        payload: book.id,
      })
    );
  };
  return (
    <Card sx={{ maxWidth: 345, mt: "1.5rem", ml: "0.5rem", mr: "0.5rem" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={book.cover_image || "images/defaultBookImg.jpg"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          debitis sed tempora molestias eaque sapiente culpa fugiat architecto
          praesentium nisi, veniam excepturi. Veniam rem aliquid amet nemo eaque
          animi maxime.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLearnMore}>
          Learn More
        </Button>
        {!state.booksAddedToCart?.some(
          (bookItem) => bookItem.id === book.id
        ) ? (
          <Button size="small" variant="contained" onClick={handleAddToCart}>
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
      </CardActions>
    </Card>
  );
};

export default CardComponent;
