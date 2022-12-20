import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-admpostjobs',
  templateUrl: './admpostjobs.component.html',
  styleUrls: ['./admpostjobs.component.css']
})
export class AdmpostjobsComponent implements OnInit {

  postingJobs :any;
  data:any;
  constructor(private fb:FormBuilder,private rest:RestService) { }

  ngOnInit(): void {
    this.postingJobs = this.fb.group({
      title :  (''),
      designation :    (''),
      experience: (''),
      location: ('')
      }) 
      
  }

  post(){
    this.rest.postJob(this.postingJobs.value).subscribe(response =>{
      this.data = response;
      console.log('data');
      Swal.fire("Posted Successfully");
    })
  
  }
}
