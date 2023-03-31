const addAuthToken = ({ type, token }) => {
  return {
    type,
    payload: { token },
  };
};

export default addAuthToken;
