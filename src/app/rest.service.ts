import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 

  constructor(private http: HttpClient) { }
  private  UserDashbaseurl1="http://localhost:8080/api/v1/jobs";
  private  UserLoginbaseurl="http://localhost:8080/api/v1/saveuserdata";
  private  UserLoginbaseurl1="http://localhost:8080/api/v1/login1";
  private  ApplyJobbaseurl="http://localhost:8080/api/v1/savejob";
  // Posting Jobs Api Handle by Admin
  getData():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:8080/api/v1/dashboarduser");
  }
  
  // AppliedUser Data in AdmDashboard
  getUserData():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/carddata");
  }
  
  // Candidate Applied For Job Api
  postData(data:any):Observable<any>{
    const url = 'http://localhost:8080/api/v1/jobs';
    return this.http.post<any>(url,data)      
  }
  
  // Login User Api
  LoginUser(data:any):Observable<any>{
    const url = 'http://localhost:3000/loginData';
    return this.http.post<any>(url,data)      
  }
  
  postJob(data:any){
    console.log(this.UserDashbaseurl1);
    console.log(data)
    return this.http.post<any>(`${this.UserDashbaseurl1}`,data);
  }
  
  // Signup User Api
  SignupUser(data:any):Observable<any>{
    const url = 'http://localhost:3000/signupData';
    return this.http.post<any>(url,data)      
  }

  // GetUser(getdata:any)
  // {
 
  // return this.httpclient.post<any>(`${this.loginbaseurl}`,getdata);
  // }
  GetUserLogin(getdata1:any){
    return this.http.post<any>(`${this.UserLoginbaseurl1}`,getdata1);
  }
  // UserLogin(data:any):Observable<any>{
  //   const url = 'http://localhost:8080/api/v1/get';
  //   return this.http.post<any>(url,data);
  //   }

    CreateUser(data:any)
    {
    console.log(data);
    return this.http.post<any>(`${this.UserLoginbaseurl}`,data);
    }

    ApplyJobData(data:any)
  {
    console.log(data);
    return this.http.post<any>(`${this.ApplyJobbaseurl}`,data);
  }
  
}



















// postData(): Observable<any> {
  //   const url = 'http://localhost:3000/carddata';
  //   const obj = {
  //     title : title,
  //     designation: designation
  //   };
  //   return this.http.post<any>(url, obj);
  // }

  // public saveUser(user: User): Observable<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.http.post<any>(url, user);
  // }
  // getComments(id: string): Observable<any> {
  //   const url = `${apiUrl + this.commentsUrl}/${id}`;
  //   return this.http.get(url, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }