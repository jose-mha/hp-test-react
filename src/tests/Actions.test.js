import { addFavorite, removeFavorite } from '../store/action';

describe('Actions Tests', () => {
  test('Add Favorite Action', () => {
    const name = 'Harry Potter';
    const image = 'http://hp-api.herokuapp.com/images/harry.jpg';

    const expected = {
      type: 'ADD_FAVORITE',
      payload: {
        name: name,
        image: image,
      },
    };

    expect(addFavorite(name, image)).toEqual(expected);
  });

  test('Remove Favorite Action', () => {
    const name = 'Harry Potter';

    const expected = {
      type: 'REMOVE_FAVORITE',
      payload: {
        name: name,
      },
    };

    expect(removeFavorite(name)).toEqual(expected);
  });
});
