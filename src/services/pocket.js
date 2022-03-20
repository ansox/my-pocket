export function login() {
  return fetch('http://127.0.0.1:8787/login/')
    .then(response => response.json());  
}

export function getUserToken(code) {
  return fetch(`http://127.0.0.1:8787/user/`)
    .then(response => response.json());
}