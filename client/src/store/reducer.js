import { SET_AUTHORIZATION_TOKEN } from "./constants";

const Reducer = (state, action) => {
  switch (action.type) {
    case SET_AUTHORIZATION_TOKEN: {
      return {
        ...state,
        authorizationToken: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
