import { MaterialModule } from './../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';




@NgModule({
  declarations: [CategoriaComponent, CategoriaDetalheComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialModule
  ]
})
export class CategoriaModule { }
