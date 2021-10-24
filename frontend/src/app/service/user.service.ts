import {AxiosInstance} from 'axios';

export class UserService{
  BASE_URL_API = 'http://localhost:8000';

  constructor(private axios: AxiosInstance) {}

  getUsers() {
    console.log(this.axios.get(`${this.BASE_URL_API}/get`));
  }
}
