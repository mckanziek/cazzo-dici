import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
// import * as shajs from 'sha.js';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  BASE_URL_API = 'http://localhost/backend/main/api';
  USER_API = `${this.BASE_URL_API}/user.php`

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.USER_API);
  }

  login($username, $password) {
    let params = new HttpParams();
    params = params.set('username', $username);
    params = params.set('password', $password);
    console.log(params);
    // params.append('password', shajs('sha256').update($password).digest('hex'));
    return this.http.get(this.USER_API, {params: params});
  }
}
