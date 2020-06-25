import { ContaAPagarDTO } from './conta-a-pagarDTO';
import { CategoriaService } from './../categoria/categoria.service';
import { ContaAPagarService } from './conta-a-pagar.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria/CategoriaDTO';

@Component({
  selector: 'app-conta-a-pagar',
  templateUrl: './conta-a-pagar.component.html',
  styleUrls: ['./conta-a-pagar.component.css']
})
export class ContaAPagarComponent implements OnInit {

  constructor(private contaService: ContaAPagarService, private categoriaService: CategoriaService) { }

  before = 'before';

  categorias: Categoria[];
  private conta: ContaAPagarDTO = {
    codigo: null,
    titulo: null,
    usuario: null,
    categoria: null,
    dataVencimento: null,
    dataPagamento: null,
    valor: null,
    indPago: null,
    indDeletado: null
  };

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
    this.conta = (this.form.value);
    this.contaService.cadastrar(this.conta).subscribe(retorno => {
      if (retorno.codigo != null) {
        this.form.reset();
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
        modal.classList.add('show');
        modal.setAttribute('te', 'te');
      }
    });
  }
  closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    modal.classList.remove('show');
  }

  ngOnInit(): void {
    this.categoriaService.categoriaAPagar().subscribe(dados => {
      this.categorias = dados;
    });
  }

}
