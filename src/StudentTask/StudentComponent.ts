import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Student } from "./StudentModel";
@Component({
    selector:'app-root',
    templateUrl:'Student.html',
    imports:[FormsModule],
    standalone:true
})
export class StudentClass{
    s=new Student(0,"",0,0,0,0,0,"","");
    studentList:any=[];
    status:any=true;

    Calculate(){
         this.s.total=Number( this.s.english)+Number( this.s.maths)+Number( this.s.science);
        this.s.percentage=( this.s.total/3).toFixed(2);
       if( this.s.percentage>=40){
         this.s.result="Pass";
         this.s.color="green";
       }
       else{
         this.s.result="Fail";
         this.s.color="red";
       }
    }
    AddStudent(){
        this.studentList.push( this.s);
        this.s=new Student(0,"",0,0,0,0,0,"","");
    }
}