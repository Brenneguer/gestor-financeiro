import { Observable } from 'rxjs';
import { ContaAPagarDTO } from './conta-a-pagarDTO';
import { UsuarioService } from './../usuario/usuario.service';
import { CategoriaService } from './../categoria/categoria.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaAPagarService {

  constructor( private http: HttpClient, private  categoriaService: CategoriaService, private usuarioService: UsuarioService) { }
  url = 'http://localhost:8080/pagar';

  cadastrar(conta: ContaAPagarDTO): Observable<ContaAPagarDTO> {
    return this.http.post<ContaAPagarDTO>(this.url, conta);
  }

}
