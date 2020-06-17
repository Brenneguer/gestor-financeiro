import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  isAberto = false;

  abrirSidebar() {
    const wrapper = document.getElementById('wrapper');
    if (this.isAberto === false) {
      wrapper.classList.remove('toggled');
      this.isAberto = true;
    } else {
      wrapper.classList.add('toggled');
      this.isAberto = false;
    }
  }

  logout(){
    if (this.authService.isLoggedIn){
      this.authService.logout();
    }
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe();
  }

}
