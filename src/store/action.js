// const generateId = () => Math.floor(Math.random() * 999999) + 1;

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

const deposit = () => {
  return {
    type: 'DEPOSIT_MONEY',
    payload: 10,
  };
};

const withdraw = () => {
  return {
    type: 'WITHDRAW_MONEY',
    payload: -10,
  };
};

export { deposit, withdraw, addFavorite, removeFavorite };
