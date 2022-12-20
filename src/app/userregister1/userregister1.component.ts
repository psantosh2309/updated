import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { MustMatch } from '../_helpers/must-match.validator';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-userregister1',
  templateUrl: './userregister1.component.html',
  styleUrls: ['./userregister1.component.css']
})
export class Userregister1Component implements OnInit {

  UserRegisterForm: FormGroup | any;
  data:any;
  submitted = false;
  constructor(private router:Router,private Formbuilder:FormBuilder, private rest:RestService,private ToastService:NgToastService) { }
 

  ngOnInit(): void {
    this.UserRegisterForm= this.Formbuilder.group({
      username :      ['',[Validators.required,Validators.minLength(4)]],
      emailId :    ['',[Validators.required,Validators.minLength(4)]],    
      password: ['', [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),Validators.minLength(8)]],    
      confirm_Password :['',[Validators.required]],
      acceptTerms: [false, Validators.requiredTrue]
  }
  ,{
    validator: MustMatch('password', 'confirm_Password')
}
)
  }

  CreateUser(){
    this.submitted = true;
    if (this.UserRegisterForm.value.password==this.UserRegisterForm.value.confirm_Password) {
    this.rest.CreateUser(this.UserRegisterForm.value).subscribe(resultdat=>{
    this.data = resultdat;
    this.ToastService.success({detail:"Success Message",summary:"Registration Success",duration:5000})
    alert("User Registeration Successful");
    this.UserRegisterForm.reset();
    this.router.navigate(['/loginuser1'])
   },
   error=>{
       //alert("User Registeration not completed")
       this.ToastService.error({detail:"Error Message",summary:"Registration Failed",duration:5000})
   }
   );
  }
else{
       alert("check your password")
       this.ToastService.error({detail:"Error Message",summary:" Worng password",duration:5000})
  }

  }

  RedirectLogin(){
    this.router.navigate(['/userregister1'])
    }
  

}
