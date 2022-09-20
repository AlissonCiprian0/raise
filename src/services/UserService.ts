import { User } from '@src/constants/types';

function login(email: string, password: string, code: string): boolean {
  localStorage.setItem(
    'user',
    JSON.stringify({
      email: email,
      password: password,
      code: code,
    })
  );

  return true;
}

export { login };
