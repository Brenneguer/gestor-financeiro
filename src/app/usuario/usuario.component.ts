import { Subscription } from 'rxjs';

import { UsuarioDTO } from './usuarioDTO';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NullTemplateVisitor } from '@angular/compiler';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuarioService, private route: ActivatedRoute) { }
  usuario: UsuarioDTO = this.usuarioService.getUsuario();

  subscription: Subscription;

  form: FormGroup = new FormGroup({
    codigo: new FormControl(''),
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    indDeletado: new FormControl('')
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

      this.usuarioService.consultarUsuario().subscribe(dados => {
        console.log('antes:', this.form.value);
        console.log(dados);

        this.usuario = dados;
        this.form.setValue(dados);
        console.log('depois: ', this.form.value);
      });

  }

  cancelarEdicao() {
    this.router.navigate(['']);
  }

  salvar() {
    if (this.form.valid) {
      this.usuario = (this.form.value);
      if (this.usuario.codigo != null) {

      }
    }
  }

}
