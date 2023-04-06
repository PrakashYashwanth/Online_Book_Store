import { REMOVE_BOOK_PREVIEW, SET_BOOK_PREVIEW } from "./constants";

const BookReducer = (state, action) => {
  switch (action.type) {
    case SET_BOOK_PREVIEW:
      return { ...state, bookToDisplay: action.payload };
    case REMOVE_BOOK_PREVIEW:
      return { ...state, bookToDisplay: null };
    default:
      return state;
  }
};

export default BookReducer;
