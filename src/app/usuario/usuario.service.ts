import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from './usuarioDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuario: UsuarioDTO = {
    codigo: 1,
    nome: null,
    email: null,
    senha: null,
    indDeletado: null
  };

  constructor(private http: HttpClient) { }

  consultarUsuario(): Observable<UsuarioDTO> {
    const url = `http://localhost:8080/usuario/${this.usuario.codigo}`;
    return this.http.get <UsuarioDTO>(url);
  }

  getUsuario(): UsuarioDTO {
    return this.usuario;
  }



}

