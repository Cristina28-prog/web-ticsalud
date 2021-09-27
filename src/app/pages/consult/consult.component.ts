import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {
  modalShow:boolean=false;
  guardarcitas= [];

     guardarCita={
     name:"",
     identificacion:"",
     fecha:""
  }
  select="citas"

  modalShowdetails:boolean=false;
  verdetalles= [];
      
     verdetalle={
       idMedicamento:"",
       nombreMed:"",
       cantidad:"",
       fecha:"",

     }

  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.modalShow=false;
  }

  selectPage(select:string){
    this.select=select;
  }


  openModal(){
    
    this.modalShow=true;
  }
  
  closedetails(){
    this.modalShowdetails=false;

  }
  openModaldetails(){
    this.modalShowdetails=true;
  }

}
