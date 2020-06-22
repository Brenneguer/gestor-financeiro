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
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaModule } from './categoria/categoria.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    SidebarComponent,
    HomeComponent,
    ContaAPagarComponent,
    CategoriaComponent
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
    CategoriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
