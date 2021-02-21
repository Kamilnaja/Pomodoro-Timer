import { config } from '../settings/initialConfig';
import { store } from '../../store/reducers/reducer';

export const fetchData = async (url: string): Promise<any> => {
  const token = store.getState().auth.token;
  const response = await fetch(`${config.url.API_URL}/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const responseBody = await response.json();

  return response.ok ? Promise.resolve(responseBody) : Promise.reject(responseBody);
};

export const updateData = async (url: string, payload: any, method: 'PUT' | 'POST'): Promise<any> => {
  const token = store.getState().auth.token;
  const response = await fetch(`${config.url.API_URL}/${url}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let responseBody;

  try {
    responseBody = await response.json();
  } catch (e) {
    responseBody = 'Something wrong with server, please try later';
  }

  return response.ok ? Promise.resolve(responseBody) : Promise.reject(responseBody);
};
