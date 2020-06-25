import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaAPagarComponent } from './conta-a-pagar.component';
import { MAT_DATE_LOCALE } from '@angular/material/core/datetime/date-adapter';
import { ContasAPagarComponent } from './contas-a-pagar/contas-a-pagar.component';



@NgModule({
  declarations: [ContaAPagarComponent, ContasAPagarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContaAPagarModule { }
