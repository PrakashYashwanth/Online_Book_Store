const addAuthToken = ({ type, token }) => {
  return {
    type,
    payload: { token },
  };
};

const removeAuthToken = ({ type }) => {
  return {
    type,
  };
};

export { addAuthToken, removeAuthToken };
