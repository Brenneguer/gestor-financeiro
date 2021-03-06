import { MatTableModule } from '@angular/material/table';
import { ContasAPagarComponent } from './conta-a-pagar/contas-a-pagar/contas-a-pagar.component';
import { ContaAPagarComponent } from './conta-a-pagar/conta-a-pagar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaModule } from './categoria/categoria.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ContaAReceberModule } from './conta-a-receber/conta-a-receber.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    SidebarComponent,
    HomeComponent,
    ContaAPagarComponent,
    ContasAPagarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HomeModule,
    HttpClientModule,
    CategoriaModule,
    ContaAReceberModule,
    MatTableModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
