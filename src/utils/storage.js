const STORAGE_KEY = "users";

// Pega todos os usuários do localStorage
export function getUsers() {
  const users = localStorage.getItem(STORAGE_KEY);
  return users ? JSON.parse(users) : [];
}

// Salva um novo usuário no localStorage
export function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}
