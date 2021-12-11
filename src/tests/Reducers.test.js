import { characterReducer } from '../store/reducer';

describe('Reducers Tests', () => {
  test('Return initial state', () => {
    expect(characterReducer([], '')).toEqual([]);
  });

  test('Return new character favorite', () => {
    const state = [
      {
        name: 'Hermione Granger',
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
    ];

    const action = {
      type: 'ADD_FAVORITE',
      payload: {
        name: 'Harry Potter',
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
    };

    const newState = characterReducer(state, action);

    expect(newState).toHaveLength(2);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      name: 'Harry Potter',
      image: 'http://hp-api.herokuapp.com/images/harry.jpg',
    });
  });

  test('Remove character favorite', () => {
    const state = [
      {
        name: 'Harry Potter',
        image: 'http://hp-api.herokuapp.com/images/harry.jpg',
      },
      {
        name: 'Hermione Granger',
        image: 'http://hp-api.herokuapp.com/images/hermione.jpeg',
      },
    ];

    const action = {
      type: 'REMOVE_FAVORITE',
      payload: {
        name: 'Hermione Granger',
      },
    };

    const newState = characterReducer(state, action);

    expect(newState).toHaveLength(1);
    expect(newState).toContainEqual(state[0]);
    expect(newState).toContainEqual({
      name: 'Harry Potter',
      image: 'http://hp-api.herokuapp.com/images/harry.jpg',
    });
  });
});
