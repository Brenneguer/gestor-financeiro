import { UsuarioService } from './../usuario/usuario.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './../login/user';
import { UsuarioDTO } from './../usuario/usuarioDTO';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { shareReplay, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  url = 'http://localhost:8080/usuario/';

  get isLoggedIn() {
    return this.loggedIn.asObservable().pipe(shareReplay(), distinctUntilChanged());
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  login(user: User): boolean {

    if (this.loggedIn.value === false) {

      this.fazerLoginUsuario(user).subscribe(dados => {
        if (dados === true) {
          this.loggedIn.next(dados);
          this.router.navigate(['']);
          this.consultaUsuarioLogado(user);
        } else {
          this.router.navigate(['login']);
          return false;
        }
      });
      return this.loggedIn.value;
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  fazerLoginUsuario(usuario: User): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}login`, usuario);
  }
  consultaUsuarioLogado(usuario: User) {
    this.http.post<UsuarioDTO>(`${this.url}usuarioLogado`, usuario).subscribe(dado => {
      this.usuarioService.setUsuarioLogado(dado);
    });
  }
}
