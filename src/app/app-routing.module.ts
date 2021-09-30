import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardNameGuard } from './guard-name.guard';
import { GeneralGuard } from './guards/general.guard';
import { ConsultComponent } from './pages/consult/consult.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { HomeMedicoComponent } from './pages/home-medico/home-medico.component';
import { HomePacienteComponent } from './pages/home-paciente/home-paciente.component';
import { HomeComponent } from './pages/home/home.component';
import { MedicamentosComponent } from './pages/medicamentos/medicamentos.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[GuardNameGuard]
  },

  { path: 'home-admin',
    component: HomeAdminComponent,
  //  canActivate:[GeneralGuard]
  },

  { path: 'home-medico',
    component: HomeMedicoComponent,
   //   canActivate:[GuardNameGuard]
  },

  {
    path: 'register',
    component: RegisterComponent,
    
  },
  {
    path: 'cita-medica',
    component: ConsultComponent,
    //  canActivate:[GuardNameGuard]
    
  },

  {
    path: 'home-paciente',
    component: HomePacienteComponent,
  //  canActivate:[GuardNameGuard]
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
