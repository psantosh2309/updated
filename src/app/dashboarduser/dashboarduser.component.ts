import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RestService } from '../rest.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})
export class DashboarduserComponent implements OnInit {

  cardData : any;
  username:any;
  emailId:any;
  constructor(private service:SharedService,private rest:RestService) { }
  
  ngOnInit(): void {
    // this.rest.getData().subscribe(
    //   data =>{
    //     this.cardData = data;
    //     console.log(this.cardData)
    //   }
    // );
    this.service.getUserdashData().subscribe(data=>{
      this.cardData= data;
     console.log(this.cardData);
    
    
    });
    this.username = sessionStorage.getItem("GetUserName");
    this.emailId=sessionStorage.getItem("GetEmailId");
  }

  //Posting Single Candidate Data to Database
    onApply(card:any){
    console.log(card);
    card.username = this.username;
    card.emailId = this.emailId;
    this.rest. ApplyJobData(card).subscribe(response=>{
      console.log('response');
    })
    Swal.fire("Applied Successfully");
  }
  
  
}
