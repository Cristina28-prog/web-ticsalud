import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
userList=[
  {
    user: "medico",
    password: "123med",
    profileType:"medico",
    name: "Ricardo Rodriguez"
  },
  {
    user: "secretaria",
    password: "123secr",
    profileType:"secretaria",
    name: "Margot García"
  },
  {
    user: "admin",
    password: "123admin",
    profileType:"administrador",
    name: "Maria Calle"
  },
  {
    user: "paciente",
    password: "123pte",
    profileType:"paciente",
    name: "Oscar Baron"
  },
 
];




  constructor( private route: Router) { }


  registrer =(user: string) =>{

  }

  async login(user: string, password:string){
   const userlogin = this.userList.find((element)=>user == element.user && element.password == password  );
  if(userlogin!= undefined) {
   await localStorage.setItem("user", JSON.stringify(userlogin));
  }
   return userlogin;
  }


   getUser(){
    let user =  localStorage.getItem("user");
    let json = user != null? JSON.parse(user) : null;
    return json;
  }

  logout(){
   localStorage.clear();
   this.route.navigateByUrl("/home");
  }


  routing(json:any){
    if(json.profileType == "paciente"){
      this.route.navigateByUrl("/home-paciente");
    }else if(json.profileType == "medico"){
      this.route.navigateByUrl("/home-medico");
    }else if(json.profileType == "secretaria"){
      this.route.navigateByUrl("/cita-medica");
    }else if(json.profileType == "administrador"){
      this.route.navigateByUrl("/home-admin");
    }else{
      this.route.navigateByUrl("/home");
    }
  }

}
