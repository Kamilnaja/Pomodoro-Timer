import { config } from '../settings/initialConfig';
import { store } from '../store/reducers/reducer';

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

export const postData = async (url: string, payload: any): Promise<any> => {
  const token = store.getState().auth.token;

  const response = await fetch(`${config.url.API_URL}/${url}/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseBody = await response.json();

  return response.ok ? Promise.resolve(responseBody) : Promise.reject(responseBody);
};
