import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  submitted = false;
  formLogin: FormGroup;
 
  constructor(private router:Router, private formBuilder: FormBuilder, private api:ApiService) {
    this.formLogin = this.formBuilder.group(
      {
        user: ['', [Validators.required]],
        password: [
          '',[Validators.required]
        ],
      }
    );

   }

  ngOnInit(): void {
    
  }
  
  get f() {
    return this.formLogin.controls;
  }

  async onSubmit() {
    this.submitted = true;
     
    console.log(JSON.stringify(this.formLogin.value));
    console.log(this.formLogin);
    if (this.formLogin.invalid) {
      return;
    }
  // this.goToRegister();
    console.log(JSON.stringify(this.formLogin.value));
    const user= await this.api.login(this.formLogin.value.user, this.formLogin.value.password);
    if(user){
      let that =this;
      setTimeout(()=>{
        console.log("setTimeout");
        that.api.routing(user);
      },1000);
            
    }
 
    console.log(user);


  }

 

  goToLogin(){
    this.router.navigateByUrl("login");
  }

  goToRegister()
  {
    this.router.navigateByUrl("register");
  }
}
