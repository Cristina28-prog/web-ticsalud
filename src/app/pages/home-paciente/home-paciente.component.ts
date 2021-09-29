import { Component, OnInit } from '@angular/core';
import { createEmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.scss']
})
export class HomePacienteComponent implements OnInit {
  modalShowpatient:boolean=false;
  ptedetalles= [{
    Idcita: 23244,
    Fecha:"12/11/2021",
    Hora:"3:30:10 pm",
    Estado:"futura", 
  },
  {
    Idcita: 23456,
    Fecha:"23/10/2021",
    Hora:"6:05:00 am",
    Estado:"futura", 
  },
  {
    Idcita: 22457,
    Fecha:"12/10/2021",
    Hora:"10:00:00 am",
    Estado:"futura", 
  },
  {
    Idcita: 224545,
    Fecha:"30/09/2021",
    Hora:"2:00:00 pm",
    Estado:"futura", 
  },

  ]
  
  listaMedicamentosPte=[{
    Idcita:23244,
    Fecha:"19/09/2021",
    Medicamentos:"Acetaminofen tabletas x 500mg; Amoxicilina capsulas x 500mg",
    Dosis:"2 dosis cada 8 horas; 1 dosis cada 12 horas", 

   },

  ]
  
  page:string="citas";
  Idcita:number=0;
  Fecha:string="";
  Hora:string=""; 
  Estado:string="";
  Medicamentos:string="";
  Dosis:string="";


  constructor() { }

  ngOnInit(): void {
  }
  closemodalShowpatient(){
    this.modalShowpatient=false;

  }
  openmodalShowpatient(cita:any){
    this.modalShowpatient=true;
  }


  selectPage(page:string){
    this.page= page;
  }
}
