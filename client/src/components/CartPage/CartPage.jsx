import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../store/contextStore";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DECREASE_COUNT, INCREASE_COUNT } from "../../store/books/constants";
import { decreaseCount, increaseCount } from "../../store/books/actions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CartPage = () => {
  const [bookState, bookDispatch] = useContext(BookContext);
  const navigate = useNavigate();
  if (!bookState.booksAddedToCart.length)
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent sx={{ textAlign: "center", pt: "2rem" }}>
          <Typography variant="h3" color="red" gutterBottom>
            No items in the cart
          </Typography>
          <Typography variant="h4">
            Kindly add an item to see the list
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", mb: "2rem" }}>
          <Button
            size="large"
            variant="contained"
            onClick={() => navigate("/home")}
          >
            Go Back
          </Button>
        </CardActions>
      </Card>
    );
  return (
    <TableContainer component={Paper} sx={{ mt: "1.5rem" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Author Name</StyledTableCell>
            <StyledTableCell align="right">Pages</StyledTableCell>
            <StyledTableCell align="right">ISBN</StyledTableCell>
            <StyledTableCell align="right">Release Date</StyledTableCell>
            <StyledTableCell align="right">Count</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookState.booksAddedToCart.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {
                  bookState.authorsData.find(
                    (author) => author.id === row.author_id
                  ).name
                }
              </StyledTableCell>
              <StyledTableCell align="right">{row.pages}</StyledTableCell>
              <StyledTableCell align="right">{row.isbn}</StyledTableCell>
              <StyledTableCell align="right">{row.releaseDate}</StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                }}
              >
                <IconButton
                  color="primary"
                  aria-label="increase count"
                  component="button"
                  onClick={() =>
                    bookDispatch(
                      increaseCount({
                        type: INCREASE_COUNT,
                        payload: row,
                      })
                    )
                  }
                >
                  <AddIcon />
                </IconButton>
                {row.count}
                <IconButton
                  color="primary"
                  aria-label="decrease count"
                  component="button"
                  onClick={() =>
                    bookDispatch(
                      decreaseCount({
                        type: DECREASE_COUNT,
                        payload: rows,
                      })
                    )
                  }
                >
                  <RemoveIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        // need to add payment details
      </Table>
    </TableContainer>
  );
};

export default CartPage;
