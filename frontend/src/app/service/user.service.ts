import {HttpClient} from '@angular/common/http';

export class UserService{
  BASE_URL_API = 'http://localhost:8080';
  USER_API = `${this.BASE_URL_API}/user`

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get(this.USER_API);
  }
}
