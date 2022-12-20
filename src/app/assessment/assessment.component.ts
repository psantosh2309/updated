import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  getskillset:any;
  UpdateSkillTestForm:FormGroup | any;
  UpdateSkillTest:any;
  SkillTestId:any;
   objectArray : object[] = [];
  //objectArray:[] | undefined | null;
  Data:any = [
    { name: '0-3 Experience', value: '0-3 Experience' },
    { name: '3-6 Experience', value: '3-6 Experience' },
    { name: 'More than 6 Experience', value: 'More than 6 Experience' },
    
  ];
  constructor(private service:SharedService,private FormBuilder:FormBuilder,private ToastService:NgToastService) { }

  ngOnInit(): void {
    this.UpdateSkillTestForm = this.FormBuilder.group({
      skillTest :           new FormControl('',[Validators.required]),
      experience:        new FormControl('',[Validators.required]),
      enddate:            new FormControl(''),
     // id:                 new FormControl('')

      
     
    });
     this.service.GetSkillTest().subscribe(res=>{
         this.getskillset = res;
        
  });
}


updatemodal(){
  //const objectArray = Object.entries(this.UpdateSkillTestForm.value);

  // objectArray.forEach(([key, value]) => {
  //   console.log(key); 
  //   console.log(value);
  // });
  // this.objectArray = [];
  //  this.objectArray.push(this.UpdateSkillTestForm.value);
  //  console.log(this.objectArray);
  this.service.updateMethod(this.SkillTestId, this.UpdateSkillTestForm.value).subscribe(res=>{
    
    console.log(this.UpdateSkillTestForm.value);
    if(res)
    {
     
      this.UpdateSkillTest = res;
      this.ToastService.success({detail:"Success Message",summary:"Skill Test Update Successfully",duration:5000})
      setTimeout(()=>{                           //<<<---using ()=> syntax
        window.location.reload();
    }, 3000);
    }

    else{
      this.ToastService.error({detail:"Error Message",summary:"Skill Test Not Update Successfully",duration:5000})

    }
   
    

})
}

EditModal(res:any)
{
 // console.log(res);
    this.service.updateSkillTest(res.id).subscribe(res=>{
    this.UpdateSkillTest = res;
    this.SkillTestId = this.UpdateSkillTest.id;
    console.log(this.UpdateSkillTest);
     this.UpdateSkillTestForm.controls["skillTest"].setValue(this.UpdateSkillTest.skillTest);
    this.UpdateSkillTestForm.controls["experience"].setValue(this.UpdateSkillTest.experience);
     this.UpdateSkillTestForm.controls["enddate"].setValue(this.UpdateSkillTest.enddate);
     
   
});

}

DeleteModal(result:any){
  this.service.deleteskillset(result.id).subscribe(res=>{
   
    if(res)
    {
     
      this.UpdateSkillTest = res;
      this.ToastService.success({detail:"Success Message",summary:"Skill Test Deleted Successfully",duration:5000})
      setTimeout(()=>{                           //<<<---using ()=> syntax
        window.location.reload();
    }, 3000);
    }

    else{

      this.ToastService.success({detail:"Error Message",summary:"Skill Test Not Deleted Successfully",duration:5000})

    }
});
}
// AddModal(res:any){
//   this.service.addMethod(this.SkillTestId, this.UpdateSkillTestForm.value).subscribe(res=>{
    
//     console.log(this.UpdateSkillTestForm.value);
//     if(res)
//     {
     
//       this.UpdateSkillTest = res;
//       this.ToastService.success({detail:"Success Message",summary:"Skill Test added Successfully",duration:5000})
//       setTimeout(()=>{                           //<<<---using ()=> syntax
//         window.location.reload();
//     }, 3000);
//     }

//     else{
//       this.ToastService.error({detail:"Error Message",summary:"Skill Test Not added Successfully",duration:5000})

//     }
   
    

// })

}


