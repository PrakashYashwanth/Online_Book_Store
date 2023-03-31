import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ textAlign: "center", pt: "2rem" }}>
        <Typography variant="h3" color="red" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="h4">
          Kindly click on the below button and navigate to the login page
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mb: "2rem" }}>
        <Button size="large" variant="contained" onClick={() => navigate("/")}>
          Login here
        </Button>
      </CardActions>
    </Card>
  );
};

export default NotFound;
