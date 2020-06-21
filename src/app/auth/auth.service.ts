import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../login/user';
import { shareReplay, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable().pipe(shareReplay(), distinctUntilChanged());
  }


  constructor(
    private router: Router
  ) { }

  login(user: User) {
    if (user.email !== '' && user.senha !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
