import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';



@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class CategoriaModule { }
