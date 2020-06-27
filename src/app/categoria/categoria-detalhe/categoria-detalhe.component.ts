import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDTO } from './../../usuario/usuarioDTO';
import { TipoDTO } from './../../tipo/TipoDTO';
import { TipoService } from './../../tipo/tipo.service';
import { UsuarioService } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../CategoriaDTO';

@Component({
  selector: 'app-categoria-detalhe',
  templateUrl: './categoria-detalhe.component.html',
  styleUrls: ['./categoria-detalhe.component.css']
})
export class CategoriaDetalheComponent implements OnInit {

  constructor(private categoriaService: CategoriaService, private usuarioService: UsuarioService,
              private tipoService: TipoService, private router: ActivatedRoute, private rota: Router) { }

  private subscription: Subscription;
  private tiposDTO: TipoDTO[];
  private usuario: UsuarioDTO = this.usuarioService.getUsuario();
  private categoria: Categoria;

  form: FormGroup = new FormGroup({
    codigo: new FormControl(''),
    nome: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    usuario: new FormControl(''),
    indDeletado: new FormControl(''),

  });

  get formCodigo(): FormControl {
    return this.form.get('codigo') as FormControl;
  }


  get formNome(): FormControl {
    return this.form.get('nome') as FormControl;
  }

  get formTipo(): FormControl {
    return this.form.get('tipo') as FormControl;
  }

  get formUsuario(): FormControl {
    return this.form.get('usuario') as FormControl;
  }

  get formIndDeletado(): FormControl {
    return this.form.get('indDeletado') as FormControl;
  }

  get tipos(): TipoDTO[] {
    return this.tiposDTO;
  }
  onSubmit() {
    this.categoria = (this.form.value);
    this.categoria.usuario = this.usuarioService.getUsuario();
    this.categoriaService.cadastrar(this.categoria).subscribe(dados => {
      if (dados.codigo != null) {
        this.form.reset();
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    });
  }

  closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    modal.classList.remove('show');
    this.rota.navigate(['/categoria']);
  }

  ngOnInit(): void {
    this.subscription = this.router.params.subscribe( parametros => {
      this.formCodigo.setValue(parametros.codigo);
      this.formNome.setValue(parametros.nome);
      this.formTipo.setValue(parametros.tipo);
      this.formUsuario.setValue(parametros.usuario);
      this.formIndDeletado.setValue(parametros.indDeletado);
    });
    this.tipoService.listar().subscribe(dados => {
      this.tiposDTO = dados;
    });
  }



}
