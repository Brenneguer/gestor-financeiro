import { TipoDTO } from './../tipo/TipoDTO';
import { TipoService } from './../tipo/tipo.service';
import { CategoriaService } from './categoria.service';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from './CategoriaDTO';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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


  constructor(private categoriaSerice: CategoriaService, private tipoService: TipoService) { }

  private categorias: Categoria[];
  private tipos: TipoDTO[];
  displayedColumns: string[] = ['Categoria', 'Tipo', 'Ações'];
  dataSource: MatTableDataSource<Categoria>;

  ngOnInit(): void {
    this.categoriaSerice.listar().subscribe(dados => {
      this.categorias = dados;
      this.dataSource = new MatTableDataSource(dados);
    });

    this.tipoService.listar().subscribe(dados => {
      this.tipos = dados;
    });
  }

get tiposSalvos(): TipoDTO[] {
  return this.tipos;
}

}
