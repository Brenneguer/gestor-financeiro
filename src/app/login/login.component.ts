import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  matcher = '';

  formulario: FormGroup = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    senhaFormControl: new FormControl('', Validators.required)
  });

  get emailGet(): FormControl {
    return this.formulario.get('emailFormControl') as FormControl;
  }

  get senhaGet(): FormControl {
    return this.formulario.get('senhaFormControl') as FormControl;
  }

  ngOnInit(): void {
  }

}
