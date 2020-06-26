import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './CategoriaDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = 'http://localhost:8080/categoria';
  constructor(private http: HttpClient) { }

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }

  cadastrar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }

  deletar(categoria: Categoria): Observable<boolean> {
    categoria.indDeletado = true;
    return this.http.delete<boolean>(`${this.url}/${categoria.codigo}`);
  }

  atualizar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }

  categoriaAPagar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url + '/filtrar/Despesa');
  }

  categoriaAReceber(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url + '/filtrar/Receita');
  }

}
