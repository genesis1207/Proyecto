import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarEquiposComponent } from './components/agregar-equipos/agregar-equipos.component';
import { DetallesDeEquiposComponent } from './components/detalles-de-equipos/detalles-de-equipos.component';
import { GenerarReporteComponent } from './components/generar-reporte/generar-reporte.component';
import { LoginComponent } from './components/login/login.component';
import { ListaDeEquiposComponent } from './components/lista-de-equipos/lista-de-equipos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LogueadoComponent } from './components/logueado/logueado.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



const routes: Routes = [
  {path:"", redirectTo: "inicio", pathMatch:"full"},

  {
    path:"logueado",
    component: LogueadoComponent,
    ...canActivate (() => redirectUnauthorizedTo (['/login']))
  },
  {
    path:"agregar-equipos",
    component: AgregarEquiposComponent,
    ...canActivate (() => redirectUnauthorizedTo (['/login']))
  },
  {
    path:"detalles-de-equipos",
    component: DetallesDeEquiposComponent,
    ...canActivate (() => redirectUnauthorizedTo (['/login']))
  },
  {
    path:"generar-reporte",
    component: GenerarReporteComponent,
    ...canActivate (() => redirectUnauthorizedTo (['/login']))
  },
  {
    path:"lista-de-equipos",
    component: ListaDeEquiposComponent,
    ...canActivate (() => redirectUnauthorizedTo (['/login']))
  },
  {path:"inicio",component: InicioComponent},
  {path:"login",component: LoginComponent},
  {path:"registro",component: RegistroComponent},
  {path:"contacto",component: ContactoComponent},

  {path:"**", redirectTo:"inicio", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
