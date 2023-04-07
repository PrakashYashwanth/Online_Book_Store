import {
  ADD_BOOKS,
  ADD_BOOK_TO_CART,
  REMOVE_BOOK_FROM_CART,
  REMOVE_BOOK_PREVIEW,
  SET_BOOK_PREVIEW,
} from "./constants";

const BookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return { ...state, booksData: action.payload };
    case SET_BOOK_PREVIEW:
      return { ...state, bookToDisplay: action.payload };
    case REMOVE_BOOK_PREVIEW:
      return { ...state, bookToDisplay: null };
    case ADD_BOOK_TO_CART:
      return {
        ...state,
        booksAddedToCart: [...state.booksAddedToCart, action.payload],
      };
    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        booksAddedToCart: state.booksAddedToCart.filter(
          (book) => book.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default BookReducer;
