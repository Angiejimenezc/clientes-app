import { Component, OnInit } from '@angular/core';
import { User } from './user';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title: string;
  user: User;

  constructor() {
    this.title = 'Login';
    this.user = new User(0, '', '', '', []);
  }

  ngOnInit(): void {}

  login(): void {
    console.log(this.user);
    if (this.user.username == null && this.user.password == null) {
      Swal.fire({
        title: 'Error',
        text: 'Debe ingresar usuario y contraseña',
        icon: 'error',
      });
    }
  }
}
