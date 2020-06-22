import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDTO } from '../usuario/usuarioDTO';
import { Subscription } from 'rxjs';
import { Food } from './Food';

@Component({
  selector: 'app-conta-a-pagar',
  templateUrl: './conta-a-pagar.component.html',
  styleUrls: ['./conta-a-pagar.component.css']
})
export class ContaAPagarComponent implements OnInit {

  constructor() { }

  before = 'before';

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  form: FormGroup = new FormGroup({
    codigo: new FormControl(''),
    titulo: new FormControl('', Validators.required),
    categoria: new FormControl(''),
    dataVencimento: new FormControl('', Validators.required),
    dataPagamento: new FormControl(''),
    valor: new FormControl('', Validators.required),
    indPago: new FormControl('', Validators.required)
  });

  get formCodigo(): FormControl {
    return this.form.get('codigo') as FormControl;
  }

  get formTitulo(): FormControl {
    return this.form.get('titulo') as FormControl;
  }

  get formCategoria(): FormControl {
    return this.form.get('categoria') as FormControl;
  }

  get formDataVencimento(): FormControl {
    return this.form.get('dataVencimento') as FormControl;
  }

  get formDataPagamento(): FormControl {
    return this.form.get('dataPagamento') as FormControl;
  }

  get formValor(): FormControl {
    return this.form.get('vaor') as FormControl;
  }

  get formIsPago(): FormControl {
    return this.form.get('indPago') as FormControl;
  }

  onSubmit() {
    console.log(this.form.value);
  }

  ngOnInit(): void {

  }

}
