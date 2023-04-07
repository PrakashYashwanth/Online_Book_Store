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

const addBookToCart = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

const removeBookFromCart = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

export { setBookPreview, removeBookPreview, addBookToCart, removeBookFromCart };
