import Axios from 'axios';
/**
 * * Método base para realizar la llamada al servicio REST.
 */
const Request = (method, url, payload) => {
  let data = payload ? payload : {};

  //* Creamos el header por default
  let requestHeaders = {
    'content-type': 'application/json',
  };

  //* Realizamos la petición al servicio REST
  return Axios({
    method: method,
    url: url,
    data: data,
    headers: requestHeaders,
  }).then(
    (response) => {
      //* Retornamos el resultado
      return response;
    },
    (error) => {
      throw error;
    }
  );
};

/**
 ** Definimos el API con los métodos get, post, put, delete y patch
 */
export const API = {
  get: (url, payload) => {
    payload = payload ? payload : {};
    let { params = null } = payload;
    if (params) {
      return Request('GET', url, payload);
    } else {
      return Request('GET', url, { params });
    }
  },

  post: (url, payload) => {
    return Request('POST', url, payload);
  },

  put: (url, payload) => {
    return Request('PUT', url, payload);
  },

  patch: (url, payload) => {
    return Request('PATCH', url, payload);
  },

  delete: (url, payload) => {
    return Request('DELETE', url, payload);
  },
};
