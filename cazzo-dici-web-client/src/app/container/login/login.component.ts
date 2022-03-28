import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {}

  login() {
    this.userService.login(this.username, this.password).subscribe(data => console.log(data));
  }
}
