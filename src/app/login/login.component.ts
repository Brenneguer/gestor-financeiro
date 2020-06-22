import { AuthService } from './../auth/auth.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }
  matcher = '';
  user: User = {
    email: null,
    senha: null
  };

  formulario: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  get emailGet(): FormControl {
    return this.formulario.get('email') as FormControl;
  }

  get senhaGet(): FormControl {
    return this.formulario.get('senha') as FormControl;
  }
  onSubmit() {
    this.user = (this.formulario.value);
    this.authService.login(this.user);
  }
  ngOnInit(): void {
      this.formulario.setValue(this.user);
  }

}
