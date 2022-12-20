import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:any;
  constructor(private Router:Router) { }

  ngOnInit(): void {
    this.username =  localStorage.getItem("GetUserName");
  }
  Logout(){
    this.Router.navigate(['/'])

  }

}
