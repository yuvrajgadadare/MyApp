import { Component } from "@angular/core";
@Component({
    selector:'app-root',
    // template:'<h1>Hi Hello</h1>'
    templateUrl:"Sample.html",
    standalone:true
})
export class SampleClass{

    rno=10
    name="Ajay";
    d=10;
    data=[10,20,32,40,51,60,70];
}