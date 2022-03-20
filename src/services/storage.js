export function saveLocal(key, value) {
  localStorage.setItem(key, value);
}

export function loadLocal(key) {
  return localStorage.getItem(key);
}

