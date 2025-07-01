import { Injectable } from "@angular/core";

@Injectable()
export class ArithmeticOperations{

    Addition(n1:any,n2:any){
        var c=Number(n1)+Number(n2);
        return c;
    }
        Substraction(n1:any,n2:any){
        var c=Number(n1)-Number(n2);
        return c;
    }
        Multiplication(n1:any,n2:any){
        var c=Number(n1)+Number(n2);
        return c;
    }
        Divison(n1:any,n2:any){
        var c=(Number(n1)/Number(n2)).toFixed(2);
        return c;
    }
    CheckPrimes(s:any,e:any){
        var data=[];
        for(var n=s;n<=e;n++){
            var cnt=0;
            for(var i=2;i<n;i++){
                if(n%i==0){
                    cnt++;
                    break;
                }
            }
            if(cnt==0){
                data.push(n);
            }
        }
        return data;
    }
}