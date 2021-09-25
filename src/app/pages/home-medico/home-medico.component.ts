import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-medico',
  templateUrl: './home-medico.component.html',
  styleUrls: ['./home-medico.component.scss']
})
export class HomeMedicoComponent implements OnInit {
  modalShow:boolean=false;
  listCitas=[
    {
      id:12,
      name:"Javier Rodriguez",
      identificacion:"10997629424",
      fecha:"4/10/2021"
    },
    {
      id:13,
      name:"Javier Rodriguez",
      identificacion:"10997629424",
      fecha:"10/10/2021"
    },
    
    {
      id:14,
      name:"Javier Rodriguez",
      identificacion:"10997629424",
      fecha:"12/10/2021"
    },
    {
      id:13,
      name:"Ricardo Meneses",
      identificacion:"10995456564",
      fecha:"10/10/2021"
    },
    
    {
      id:14,
      name:"Ricardo Meneses",
      identificacion:"10995456564",
      fecha:"12/10/2021"
    },

  ]; 


  selectCita={
     name:"",
     identificacion:"",
     fecha:""
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  close(){
    this.modalShow=false;
  }

  openModal(cita:any){
    this.selectCita=cita;
    this.modalShow=true;
  }

}
