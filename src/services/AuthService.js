const API_HOST = 'http://localhost:3001/api';

export async function loginUser(credentials) {
  return fetch(`${API_HOST}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: credentials }),
  }).then((data) => data.json());
}

export async function registerUser(credentials) {
  return fetch(`${API_HOST}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: credentials }),
  }).then((data) => data.json());
}
