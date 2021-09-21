import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { ConsultsComponent } from './pages/consults/consults.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomePacienteComponent } from './pages/home-paciente/home-paciente.component';
import { HomeMedicoComponent } from './pages/home-medico/home-medico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ConsultComponent,
    ConsultsComponent,
    HomeAdminComponent,
    HomePacienteComponent,
    HomeMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
