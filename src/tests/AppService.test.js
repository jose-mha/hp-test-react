import AppService from '../services/AppService';

describe('Service API Tests', () => {
  test('Get data students', async () => {
    const response = await AppService.getCharacters();
    await expect(response.data).toContainEqual({
      name: 'Harry Potter',
      species: 'human',
      gender: 'male',
      house: 'Gryffindor',
      dateOfBirth: '31-07-1980',
      yearOfBirth: 1980,
      ancestry: 'half-blood',
      eyeColour: 'green',
      hairColour: 'black',
      wand: {
        wood: 'holly',
        core: 'phoenix feather',
        length: 11,
      },
      patronus: 'stag',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Daniel Radcliffe',
      alive: true,
      image: 'http://hp-api.herokuapp.com/images/harry.jpg',
    });
  });

  const generateId = () => Math.floor(Math.random() * 999999) + 1;

  test('Save New Student', async () => {
    const payload = {
      id: generateId(),
      name: 'Gemelo Harry Potter',
      dateOfBirth: '31-06-1980',
      eyeColour: 'green',
      hairColour: 'black',
      gender: 'male',
      hogwartsStudent: true,
      hogwartsStaff: false,
      alive: true,
    };
    const response = await AppService.newCharacter(payload);

    await expect(response.status).toEqual(201);
  });
});
