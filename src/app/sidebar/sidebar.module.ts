import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { UsuarioComponent } from '../usuario/usuario.component';



@NgModule({
  declarations: [SidebarComponent, UsuarioComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule
  ]
})
export class SidebarModule { }
