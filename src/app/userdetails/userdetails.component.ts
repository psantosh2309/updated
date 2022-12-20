import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  ItemsArray: any[] = [];
  deleteData:any;
  examLinkForm: FormBuilder | any;
  id:any;
  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.rest.getUserData().subscribe(
      data =>{
        this.ItemsArray = data;
      }
    );
  }




 public deleteItem(id:number) {
    confirm('Are you sure to delete this data')
    this.rest.deleteUser(id).subscribe(
      res =>{
         this. deleteData = res;
         console.log(this. deleteData)
        this.ngOnInit();
      }
       );
    }

    getEmail(value:any){
      console.log(value);
      //this.examLinkForm.controls["username"].getValue(value);
      
      }

}
