import { MaterialModule } from './../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';



@NgModule({
  declarations: [CategoriaComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialModule
  ]
})
export class CategoriaModule { }
