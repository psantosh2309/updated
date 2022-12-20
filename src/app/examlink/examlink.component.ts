import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl} from '@angular/forms';
import{SharedService} from '../shared.service';

@Component({
  selector: 'app-examlink',
  templateUrl: './examlink.component.html',
  styleUrls: ['./examlink.component.css']
})
export class ExamlinkComponent implements OnInit {
  examLinkForm :any;
  data:any;
    constructor(private fb:FormBuilder,private shared:SharedService) { }


  ngOnInit(): void {
    this.examLinkForm = this.fb.group({
      username :   new FormControl(),
      email :  new FormControl(),
      subject :  new FormControl(),
      content :  new FormControl(),
     
       })
      }

sendLink(){
  console.log(this.examLinkForm.value);
  this.shared.postLink(this.examLinkForm.value).subscribe(res => {
    this.data=res;
    this.examLinkForm.reset();

  } 
   )
   }
   getEmail(value:any){
    console.log(value);
    this.examLinkForm.controls["username"].setValue(value);
    
    }

  }




