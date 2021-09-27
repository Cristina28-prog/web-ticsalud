import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
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


  listaMedicamanetos=[
    {
      id:1,
      medicamento:"acetaminofen",
      cantidad:30,
      fecha:"4/10/2021",
      detalle:"2 diarias"
    },
/*    {
      id:2,
      medicamento:"amoxicilina",
      cantidad:30,
      fecha:"20/10/2021",
      detalle:"2 diarias"
    },{
      id:3,
      medicamento:"ibuprofeno",
      cantidad:15,
      fecha:"4/10/2021",
      detalle:"2 diarias"
    },{
      id:4,
      medicamento:"acetaminofen",
      cantidad:30,
      fecha:"4/10/2021",
      detalle:"2 diarias"
    },*/
  ];

  selectCita={
     name:"",
     identificacion:"",
     fecha:""
  }
 // declara las variables del formulario
  medicamento:string="";
  cantidad:number=0;
  detalle:string=""; 

  constructor(private _snackBar: MatSnackBar) {

   }

  ngOnInit(): void {
    
  }

  close(){
    this.modalShow=false;
  }

  openModal(cita:any){
    this.selectCita=cita;
    this.modalShow=true;
  }

  remove(position:number){
    this.listaMedicamanetos.splice(position, 1);
  }

  add(){
    if(this.medicamento!="" &&
      this.cantidad !=0 &&
      this.detalle!=''){
        this.listaMedicamanetos.push(
          {
            id:2,
            medicamento:this.medicamento,
            cantidad: this.cantidad ,
            fecha: new Date().toString(),
            detalle: this.detalle
          }
        ); 
        this.medicamento="";
        this.cantidad =0;
        this.detalle="";
    }else{
       
      this.openSnackBar("Ingrese todos los campos!!");

    }

  }


  openSnackBar(message:string, ) {
    this._snackBar.open(message, "cerrar");
  }


  save(){
    
  }
}
