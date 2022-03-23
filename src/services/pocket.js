export function login() {
  return fetch(' https://pocket-api.anso.workers.dev/login')
    .then(response => response.json());  
}

export function authorizeUser(code) {
  return fetch(` https://pocket-api.anso.workers.dev/authorize?code=${code}`)
    .then(response => response.json());
}

export function retrieve(code) {
  return fetch(` https://pocket-api.anso.workers.dev/retrieve?code=${code}`)
    .then(response => response.json()); 
}