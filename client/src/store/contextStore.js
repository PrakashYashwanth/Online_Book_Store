import { createContext } from "react";

export const initialState = {
  authorizationToken: sessionStorage.getItem("Auth_Token"),
};

export const BookContext = createContext();
