import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-headergeneral',
  templateUrl: './headergeneral.component.html',
  styleUrls: ['./headergeneral.component.scss']
})
export class HeadergeneralComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  logout(){
    this.api.logout();
  }

}
