import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ArithmeticOperations } from "./ArithmeticServices";

@Component({
    selector:'app-root',
    imports:[FormsModule],
    templateUrl:'Sample.html',
    standalone:true,
    providers:[ArithmeticOperations]
})

export class SampleClass{

    num1:any;
    num2:any;
    addresult:any;
    subresult:any;
    mulresult:any;
    divresult:any;
    primes:any=[];

    constructor(private op:ArithmeticOperations){
        // console.log("Calling Constructor")
    }

    Calculate(n1:any,n2:any){
        this.addresult=this.op.Addition(n1,n2);
        this.subresult=this.op.Substraction(n1,n2);
        this.mulresult=this.op.Multiplication(n1,n2);
        this.divresult=this.op.Divison(n1,n2);
        
    }

    DisplayPrimes(s:any,e:any){
        this.primes=this.op.CheckPrimes(s,e);
        console.log(this.primes);
    }
}