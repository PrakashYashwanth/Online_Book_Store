import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardComponent = ({ book }) => {
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
        <Button size="small">Learn More</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
