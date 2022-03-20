export function login() {
  return fetch('http://127.0.0.1:8787/login')
    .then(response => response.json());  
}

export function authorizeUser(code) {
  return fetch(`http://127.0.0.1:8787/authorize?code=${code}`)
    .then(response => response.json());
}

export function retrieve(code) {
  return fetch(`http://127.0.0.1:8787/retrieve?code=${code}`)
    .then(response => response.json()); 
}