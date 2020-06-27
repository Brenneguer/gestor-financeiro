import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { TipoDTO } from './../tipo/TipoDTO';
import { TipoService } from './../tipo/tipo.service';
import { CategoriaService } from './categoria.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria } from './CategoriaDTO';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private categorias: Categoria[];
  private tipos: TipoDTO[];
  displayedColumns: string[] = ['Categoria', 'Tipo', 'Ações'];
  dataSource: MatTableDataSource<Categoria>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private categoriaSerice: CategoriaService, private tipoService: TipoService, private router: Router) { }

  ngOnInit(): void {
    this.categoriaSerice.listar().subscribe((dados) => {
      (this.categorias = dados);
      this.dataSource = new MatTableDataSource(this.categorias);
      this.dataSource.paginator = this.paginator;
    });

    this.tipoService.listar().subscribe(dados => {
      this.tipos = dados;
    });

  }

  editarCategoria(valor: Categoria) {
    this.router.navigate(['/categoria/nova', valor]);
  }

  excluirCategoria(valor: Categoria) {
    this.categoriaSerice.deletar(valor).subscribe(dados => {
      if (dados === true ) {
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
    this.router.navigate(['/']);
  }

  get tiposSalvos(): TipoDTO[] {
    return this.tipos;
  }

}
