import { CategoriaService } from './categoria.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Categoria } from './CategoriaDTO';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private categoria: Categoria = {
    codigo: null,
    nome: null,
    usuario: null,
    indDeletado: null,
  };

  private categorias: Categoria[];

  constructor(private categoriaSerice: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaSerice.listar().subscribe(dados => {
      this.categorias = dados;
    });
  }



}
