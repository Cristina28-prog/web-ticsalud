import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';



@Injectable({
  providedIn: 'root'
})
export class GuardNameGuard implements CanActivate {

  constructor(private api:ApiService,
    private route:Router, private routeactivate: ActivatedRoute){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let json =this.api.getUser();
      if(json){
        this.api.routing(json);
        return false;
      }
    return true;
  }
  
}
