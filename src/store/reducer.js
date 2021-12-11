const characterReducer = (state = [], action) => {
  if (action.type === 'ADD_FAVORITE') {
    if (state.length >= 5) return state;

    const { name } = action.payload;
    const index = state.findIndex((character) => character.name === name);

    if (index !== -1) return state;

    return [...state, action.payload];
  }

  if (action.type === 'REMOVE_FAVORITE') {
    const { name } = action.payload;

    return state.filter((character) => character.name !== name);
  }

  return state;
};

export { characterReducer };
