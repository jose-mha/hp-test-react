const addFavorite = (name, img) => {
  return {
    type: 'ADD_FAVORITE',
    payload: {
      name: name,
      image: img,
    },
  };
};

const removeFavorite = (name) => {
  return {
    type: 'REMOVE_FAVORITE',
    payload: {
      name: name,
    },
  };
};

export { addFavorite, removeFavorite };
