import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from './usuarioDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario: UsuarioDTO = {
    codigo: null,
    nome: null,
    email: null,
    senha: null,
    indDeletado: null
  };

  private usuarioLogado: UsuarioDTO;
  url = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  consultarUsuario(codigo: number): Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${this.url}${codigo}`);
  }

  getUsuario(): UsuarioDTO {
    return this.usuarioLogado;
  }

  setUsuarioLogado(user: UsuarioDTO) {
    this.usuarioLogado = user;
  }

  atualizarUsuario(user: UsuarioDTO) {
    this.http.put<UsuarioDTO>('http://localhost:8080/usuario', user).subscribe(dado => {
      this.usuarioLogado = dado;
    });
  }


}

