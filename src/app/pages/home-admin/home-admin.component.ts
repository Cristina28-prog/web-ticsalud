import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-admin',
  templateUrl:'./home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  logout(){
    this.api.logout();
  }
}
