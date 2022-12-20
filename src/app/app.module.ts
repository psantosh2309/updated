import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgToastModule } from 'ng-angular-popup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { SharedService } from './shared.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AssessmentComponent } from './assessment/assessment.component';
import{QuestionComponent}  from './question/question.component';
import{FirstComponent}  from './first/first.component';
import{DashboardComponent}  from './dashboard/dashboard.component';
import{AdmpostjobsComponent}  from './admpostjobs/admpostjobs.component';
import{RestService} from  './rest.service';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { Loginuser1Component } from './loginuser1/loginuser1.component';
import { Userregister1Component } from './userregister1/userregister1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    //  DashboarduserComponent,
    HeaderComponent,
    AssessmentComponent,
    QuestionComponent,
     FirstComponent,
    DashboardComponent,
    AdmpostjobsComponent,
    DashboarduserComponent,
 
    WildcardComponent,
      Loginuser1Component,
      Userregister1Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule

    
  ],
  providers: [SharedService,RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
