import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector:'app-root',
    templateUrl:'Test.html',
    imports:[FormsModule],
    standalone:true
})
export class TestClass{

    fname:any;
    msg="";
    num1:any;
    num2:any;
    result:any;

    Display(){
        this.msg= "Welcome "+this.fname;
    }

    Addition(){
        var c=Number(this.num1)+Number(this.num2);
        this.result=c;
    }
}