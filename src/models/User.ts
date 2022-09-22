import { login, logout } from '../services/UserService';

class User {
  email: string;
  password: string;
  code: string;

  constructor(email: string, password: string, code: string) {
    if (localStorage.getItem('user')) {
      const userData = JSON.parse(localStorage.getItem('user') || '');

      this.email = userData.email;
      this.password = userData.password;
      this.code = userData.code;
    } else {
      this.email = email;
      this.password = password;
      this.code = code;
    }
  }

  authenticate(email: string, password: string, code: string) {
    if (login(email, password, code)) {
      this.email = email;
      this.password = password;
      this.code = code;

      window.location.href = '/home';
    } else {
      alert('Erro ao logar');
    }
  }

  getUser() {
    return {
      email: this.email,
      password: this.password,
      code: this.code,
    };
  }

  isLogged() {
    if (this.email !== '') return true;
    return false;
  }

  exit() {
    logout();
    this.email = '';
    this.password = '';
    this.code = '';
    window.location.href = '/home';
  }
}

export default new User('', '', '');
