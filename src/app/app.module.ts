import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarEquiposComponent } from './components/agregar-equipos/agregar-equipos.component';
import { DetallesDeEquiposComponent } from './components/detalles-de-equipos/detalles-de-equipos.component';
import { GenerarReporteComponent } from './components/generar-reporte/generar-reporte.component';
import { LoginComponent } from './components/login/login.component';
import { ListaDeEquiposComponent } from './components/lista-de-equipos/lista-de-equipos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LogueadoComponent } from './components/logueado/logueado.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarEquiposComponent,
    DetallesDeEquiposComponent,
    GenerarReporteComponent,
    LoginComponent,
    ListaDeEquiposComponent,
    RegistroComponent,
    LogueadoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
