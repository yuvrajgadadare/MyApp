import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PowerPipeClass } from "./PowerPipe";
import { PrimePipeClass } from "./PrimePipe";

@Component({
    selector:'app-root',
    templateUrl:'Index.html',
    standalone:true,
    imports:[FormsModule,CommonModule,PowerPipeClass,PrimePipeClass],
    
    
})

export class PipeClass{

    fname:any="ajay";
    lname:any="JADHAV";
    per=0.0346;
    dt:any=new Date();
    amount =1234;
    start:any=10;
    end:any=100
    students:any=[{"rno":1,"name":"Amit"},{"rno":2,"name":"Savita"},{"rno":3,"name":"Sagar"},{"rno":4,"name":"Kumar"}]
num:any=7;
p:any=3;

}