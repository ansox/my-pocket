// const baseUrl = 'https://pocket-api.anso.workers.dev';
const baseUrl = 'http://127.0.0.1:8787';

export function login() {
  return fetch(`${baseUrl}/login`)
    .then(response => response.json());  
}

export function authorizeUser(code) {
  return fetch(`${baseUrl}/authorize?code=${code}`)
    .then(response => response.json());
}

export function retrieve(code, lastSync) {
  return fetch(`${baseUrl}/retrieve?code=${code}&since=${lastSync}`)
    .then(response => response.json()); 
}