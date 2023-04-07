const addBooks = ({ type, payload }) => {
  return {
    type,
    payload,
  };
};

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

export {
  addBooks,
  setBookPreview,
  removeBookPreview,
  addBookToCart,
  removeBookFromCart,
};
