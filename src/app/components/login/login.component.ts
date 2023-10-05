import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {minLengthValidator} from "../../validation/custom-validators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, private formBuilder: FormBuilder) {
  }

  form!: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, minLengthValidator(5)]], // Применение кастомного валидатора
    });
  }
  login: string = '';
  password: string = '';

  onSubmit(): void {
    if (this.authService.login(this.login, this.password)) {
      // Пользователь успешно авторизирован, перенаправляем на страницу Home
      this.router.navigate(['/home']);
    } else {
      // Ошибка входа, выполните соответствующие действия, например, отобразьте сообщение об ошибке
    }
  }

}
