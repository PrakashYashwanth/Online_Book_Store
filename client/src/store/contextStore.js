import { createContext } from "react";

export const initialUserState = {
  authorizationToken: sessionStorage.getItem("Auth_Token"),
};

export const initialBookState = {
  booksData: [],
  authorsData: [],
  bookToDisplay: null,
  booksAddedToCart: [],
};

export const UserContext = createContext();
export const BookContext = createContext();
