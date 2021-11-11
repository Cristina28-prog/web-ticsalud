import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-admin',
  templateUrl:'./home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  trazabilidad=[{
    Id_medicamentos:2322344,
    Medicamentos:"Acetaminofen tabletas x 500mg; Amoxicilina capsulas x 500mg",
    Fecha: "19/09/2021",
     
  }]



  page:string="perfil";
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  logout(){
    this.api.logout();
  }
 
  selectPage(select:string){
    this.page=select;
  }

}
