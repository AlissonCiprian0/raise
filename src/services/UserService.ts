import { User } from '@src/constants/types';

function login(
  email: string,
  password: string,
  code: string,
  name?: string
): boolean {
  localStorage.setItem(
    'user',
    JSON.stringify({
      email: email,
      password: password,
      code: code,
      name: name || '',
    })
  );

  return true;
}

function logout() {
  localStorage.setItem('user', '');
}

export { login, logout };
