import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { User } from './user';


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
    this.user = new User()
  }

  ngOnInit(): void {}

  login(): void {
    console.log(this.user);
    if (this.user.username == null && this.user.password == null) {
      swal.fire({
        title: 'Error',
        text: 'Debe ingresar usuario y contraseña',
        icon: 'error',
      });
    }else{
      swal.fire({
        title: `Bienvenido ${this.user.username}`,
        text: 'Has iniciado sesión correctamente',
        icon: 'success',

      });
    }
  }
}
