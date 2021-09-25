import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardNameGuard } from './guard-name.guard';
import { ConsultComponent } from './pages/consult/consult.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeMedicoComponent } from './pages/home-medico/home-medico.component';
import { HomePacienteComponent } from './pages/home-paciente/home-paciente.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[GuardNameGuard]
  },

  { path: 'home-admin',
    component: HomeAdminComponent,
  },

  { path: 'home-medico',
    component: HomeMedicoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    
  },
  {
    path: 'cita-medica',
    component: ConsultComponent,
    
  },

  {
    path: 'home-paciente',
    component: HomePacienteComponent,
  },
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full' 
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
