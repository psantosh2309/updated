import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './assessment/assessment.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Loginuser1Component } from './loginuser1/loginuser1.component';
import { Userregister1Component } from './userregister1/userregister1.component';
import{QuestionComponent} from './question/question.component';
 import{FirstComponent}  from './first/first.component';
 import{DashboardComponent}  from './dashboard/dashboard.component';
import{WildcardComponent} from './wildcard/wildcard.component';
import{AdmpostjobsComponent}  from './admpostjobs/admpostjobs.component';

const routes: Routes = [
  {path:"",component:FirstComponent},
  {path:"first",component:FirstComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"loginuser1",component:Loginuser1Component},
  {path:"userregister1",component:Userregister1Component},
  {path:"dashboard",component:DashboardComponent},
  {path:"Question",component:QuestionComponent},
  {path:"dashboarduser",component:DashboarduserComponent},
  {path:"Assessment",component:AssessmentComponent},
  {path:"admpostjobs",component:AdmpostjobsComponent},
  {path:"**",component:WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
