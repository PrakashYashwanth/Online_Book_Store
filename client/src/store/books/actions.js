const setBookPreview = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

const removeBookPreview = ({ type }) => {
  return {
    type,
  };
};

export { setBookPreview, removeBookPreview };
