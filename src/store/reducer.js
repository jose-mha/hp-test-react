const characterReducer = (state = [], action) => {
  if (action.type === 'ADD_FAVORITE') {
    return [...state, action.payload];
  }
  if (action.type === 'REMOVE_FAVORITE') {
    const { id } = action.payload;
    return state.map((character) => {
      if (character.id === id) {
        return {
          ...character,
          important: !character.important,
        };
      }
      return character;
    });
  }

  return state;
};

const initialState = {
  amount: 0,
};

const amountReducer = (state = initialState, action) => {
  if (action.type === 'DEPOSIT_MONEY') {
    return {
      ...state,
      amount: state.amount + 10,
    };
  }
  if (action.type === 'WITHDRAW_MONEY') {
    return {
      ...state,
      amount: state.amount - 10,
    };
  }

  return state;
};

export { amountReducer, characterReducer };
