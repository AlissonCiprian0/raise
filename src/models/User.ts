import { login } from '../services/UserService';

class User {
  email: string;
  password: string;
  code: string;

  constructor(email: string, password: string, code: string) {
    this.email = email;
    this.password = password;
    this.code = code;
  }

  authenticate(email: string, password: string, code: string) {
    if (login(email, password, code)) {
      this.email = email;
      this.password = password;
      this.code = code;
    } else {
      console.log('Erro ao logar');
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
}

export default new User('', '', '');
