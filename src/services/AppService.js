import { API } from './api';

/**
 ** Clase para el consumo de endpoints implementando API
 */
class AppService {
  url = 'http://localhost:5000/';

  /**
   * @endpoint /characters?name=
   */
  async getCharacterByName(name = '') {
    return await API.get(`${this.url}characters?name=${name}`);
  }

  /**
   * @endpoint /characters
   */
  async getCharacters() {
    return await API.get(`${this.url}characters`);
  }

  /**
   * @endpoint /characters
   */
  async newCharacter(payload) {
    return await API.post(`${this.url}staff`, payload);
  }

  /**
   * @endpoint /gryffindor
   */
  async getGryffindor() {
    return await API.get(`${this.url}gryffindor`);
  }

  /**
   * @endpoint /staff
   */

  async getStaff() {
    return await API.get(`${this.url}staff`);
  }

  /**
   * @endpoint /students
   */
  async getStudents() {
    return await API.get(`${this.url}students`);
  }
}

export default new AppService();
