import {
  SET_AUTHORIZATION_TOKEN,
  REMOVE_AUTHORIZATION_TOKEN,
} from "./constants";

const Reducer = (state, action) => {
  switch (action.type) {
    case SET_AUTHORIZATION_TOKEN: {
      return {
        ...state,
        authorizationToken: action.payload,
      };
    }
    case REMOVE_AUTHORIZATION_TOKEN: {
      return {
        ...state,
        authorizationToken: "",
      };
    }
    default:
      return state;
  }
};

export default Reducer;
