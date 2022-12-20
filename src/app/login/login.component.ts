import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup | any;
loginres:any;
constructor(private router:Router,private service:SharedService,private Formbuilder:FormBuilder,private ToastService:NgToastService) //private ToastService:NgToastService
{ }

  ngOnInit(): void {
    this.loginForm = this.Formbuilder.group({
      username :['',[Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      ),Validators.minLength(8)]],
     
      })
  }

  Login(){
    console.log(this.loginForm.value);
    this.service.GetUser(this.loginForm.value).subscribe(resultdat=>{
     if(resultdat){
      this.loginres = resultdat;
      localStorage.setItem("GetUserName",this.loginres.username);
      // localStorage.setItem("GetEmailId",this.loginres.emailId);
      alert("login sucess")
     this.ToastService.success({detail:"Success Message",summary:"Login Successfully",duration:5000})
     this.router.navigate(['dashboard'])

     }
     else{
       alert("login not success")
      this.ToastService.error({detail:"Error Message",summary:"Login failed,Try again later it",duration:5000})
      this.router.navigate(['/register'])
     }
      
     })
      

  }

  redirectregister(){
    
  this.router.navigate(['register'])
  
  }

}
