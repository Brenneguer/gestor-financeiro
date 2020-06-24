import { TipoDTO } from './TipoDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  url = 'http://localhost:8080/tipo';

  constructor(private http: HttpClient) { }

  listar(): Observable<TipoDTO> {
    return this.http.get<TipoDTO>(this.url);
  }
}
