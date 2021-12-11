const characterReducer = (state = [], action) => {
  if (action.type === 'ADD_FAVORITE') {
    if (state.length >= 5) return state;

    if (state.length === 0) return [...state, action.payload];

    if (state.length > 0) {
      const { name } = action.payload;
      const index = state.findIndex((character) => character.name === name);

      if (index !== -1) return state;
      else return [...state, action.payload];
    }

    return state;
  }

  if (action.type === 'REMOVE_FAVORITE') {
    const { name } = action.payload;

    return state.filter((character) => character.name !== name);
  }

  return state;
};

export { characterReducer };
