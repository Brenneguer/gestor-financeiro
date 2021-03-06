import { CategoriaComponent } from './../categoria/categoria.component';
import { ContasAPagarComponent } from './../conta-a-pagar/contas-a-pagar/contas-a-pagar.component';
import { ContaAPagarComponent } from './../conta-a-pagar/conta-a-pagar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from '../usuario/usuario.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AuthGuard } from '../auth/auth.guard';
import { CategoriaDetalheComponent } from '../categoria/categoria-detalhe/categoria-detalhe.component';



const routes: Routes = [
  {
    path: '', component: SidebarComponent, canActivate: [AuthGuard],
    children: [{ path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
    { path: 'apagar', component: ContaAPagarComponent, canActivate: [AuthGuard] },
    { path: 'contas', component: ContasAPagarComponent, canActivate: [AuthGuard] },
    { path: 'categoria', component: CategoriaComponent, canActivate: [AuthGuard] },
    { path: 'categoria/nova', component: CategoriaDetalheComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
