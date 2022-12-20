import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-loginuser1',
  templateUrl: './loginuser1.component.html',
  styleUrls: ['./loginuser1.component.css']
})
export class Loginuser1Component implements OnInit {

  loginUserForm:FormGroup | any;
  submitted = false;
  data:any;
 
  constructor(private rest:RestService,private Formbuilder:FormBuilder,private router:Router,private ToastService:NgToastService) { }

  ngOnInit(): void {
    this.loginUserForm = this.Formbuilder.group({
      username :  ['',[Validators.required,Validators.minLength(4)]],
      emailId :    ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),Validators.minLength(8)]],
      acceptTerms: [false, Validators.requiredTrue]
      })
  }

  loginUser(){
    this.submitted = true;
    this.rest.GetUserLogin(this.loginUserForm.value).subscribe(res=>{
    if(res){
    this.data = res;
    alert("Login Success");
    this.ToastService.success({detail:"Success Message",summary:"Login Success",duration:5000})
    this.loginUserForm.reset();
     sessionStorage.setItem("GetUserName", this.data.username);
     sessionStorage.setItem("GetEmailId", this.data.emailId);
     this.router.navigate(['dashboarduser'])
      }
      else{
        alert("Login not success")
        this.ToastService.error({detail:"Error Message",summary:"Login failed",duration:5000})
     }
    },
      error=>
        alert("check your email")
    
    );
    
      
    
    }
    
      
  

  redirectregister(){
    this.router.navigate(['userregister1'])
    }
  

}
