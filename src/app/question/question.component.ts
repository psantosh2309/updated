import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  QuestionForm:FormGroup | any;
  AddForm: any;  
  CreateForm:any;
  QuestForm:any;
  carddataq:any;
  constructor(private FormBuilder:FormBuilder,private service:SharedService,private ToastService:NgToastService ) { }

  ngOnInit(): void {
  
    this.QuestionForm = this.FormBuilder.group({
      ChoiceForm: new FormArray([]) ,
      questionType :           new FormControl('',[Validators.required]),
      problemStatement:        new FormControl('',[Validators.required]),
      //  choice:            new FormControl(''),
      //  choicequest:            new FormControl(''),
     // id:                 new FormControl('')

  });
  this.service.getQuestionData().subscribe(data1=>{
    
    this.carddataq=data1;
    console.log(this.carddataq);
     
      });
}
// getQuestion1(){
//   this.service.getQuestionData().subscribe(data1=>{
    
// this.cardDataq=data1;
// console.log(this.cardDataq);
 
//   });
// }

createItem(): FormGroup {  
  return this.FormBuilder.group({  
  
    Choice:   [],
    choiceQuestion:[]
  });  
}   


addItem(): void {  
  this.AddForm = this.QuestionForm.get('ChoiceForm') as FormArray;  
  this.AddForm.push(this.createItem());  
  //this.CreateForm = this.AddForm.value;
  
}  

deleterow(id:any){

  console.log(id);
 
    this.AddForm = this.QuestionForm.get('ChoiceForm') as FormArray;
    this.AddForm.removeAt(id);
    


}



SaveQuestion(){
  console.log(this.QuestionForm.value);
  this.service.SaveQuestion(this.QuestionForm.value).subscribe(resultdat=>{
 
    if(resultdat)
    {
      
      this.QuestForm = resultdat;
     this.QuestionForm.reset();
      this.ToastService.success({detail:"Success Message",summary:"Question Saved Successfully",duration:5000})
    
     
    
  
      
    }
    else{
      this.ToastService.error({detail:"Error Message",summary:"Question not  Saved Successfully",duration:5000})
     
    }
   
  
  });
  

}


}
