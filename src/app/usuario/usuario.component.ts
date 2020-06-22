import { HomeComponent } from './../home/home.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioDTO } from './usuarioDTO';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  constructor(private router: Router) { }
  usuario: UsuarioDTO = new UsuarioDTO('Weuller', 'wbrenneguer07@gmail.com', 'Ts40id60');


  form: FormGroup = new FormGroup({
    codigo: new FormControl({value: '', disabled: true}),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  get formCodigo(): FormControl {
    return this.form.get('codigo') as FormControl;
  }

  get formNome(): FormControl {
    return this.form.get('nome') as FormControl;
  }

  get formEmail(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get formSenha(): FormControl {
    return this.form.get('senha') as FormControl;
  }

  ngOnInit(): void {
    this.usuario.setCodigo(1);
    this.form.setValue(this.usuario);

  }

  cancelarEdicao() {
    this.router.navigate(['']);
  }

}
