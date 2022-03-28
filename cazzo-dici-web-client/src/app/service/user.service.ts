import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  BASE_URL_API = 'http://localhost/backend/main/api';
  USER_API = `${this.BASE_URL_API}/user.php`;

  dataMock: User[] = [
    {id: 0, name: 'testUser', color: '#fad45b', password: ''},
    {id: 1, name: 'secondUser', color: '#bd2d2d', password: ''}
  ];

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.dataMock;
    /*return this.http.get(this.USER_API);*/
  }

  getUserById(id: number) {
    return this.dataMock.find(u => u.id == id);
  }

  login($username, $password) {
    let params = new HttpParams();
    params = params.set('username', $username);
    params = params.set('password', $password);
    return this.http.get(this.USER_API, {params: params});
  }
}
