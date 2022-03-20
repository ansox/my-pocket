export function saveLocal(key, value) {
  localStorage.setItem(key, value);
}

export function loadLocal(key) {
  localStorage.getItem(key);
}

