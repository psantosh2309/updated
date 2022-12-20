import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm : FormGroup | any;
  data:any;
  constructor(private router:Router,private Formbuilder:FormBuilder,private service:SharedService,private ToastService:NgToastService) { }
  //private ToastService:NgToastService
ngOnInit(): void {
    this.RegisterForm = this.Formbuilder.group({
      username :           new FormControl(null,Validators.required),
      emailId :        new FormControl(null,[Validators.required,Validators.email]),
      password:        new FormControl(null,[Validators.required,Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),Validators.minLength(8)]),
      confirm_password :new FormControl(null,Validators.required),
       })
  }
 CreateUser(){
    console.log(this.RegisterForm.value);
    if (this.RegisterForm.value.password == this.RegisterForm.value.confirm_password) {
    this.service.CreateUser(this.RegisterForm.value).subscribe(resultdat=>{
    this.data = resultdat;
    alert("Registration Successfully");
    this.ToastService.success({detail:"Success Message",summary:"Registration Success",duration:5000})
    this.RegisterForm.reset();
    this.router.navigate(['/loginuser1'])
   },
   error=>
    //alert("Registeration not Success")
    this.ToastService.error({detail:"Error Message",summary:"Registration Failed",duration:5000})
   );
     
  }
    else{
      alert("check your password")
      this.ToastService.error({detail:"Error Message",summary:"Wrong Password",duration:5000})
    }

  }
 RedirectLogin()
 {
    this.router.navigate(['/']);
  }

}

