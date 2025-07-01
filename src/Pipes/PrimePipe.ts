import { Pipe,PipeTransform } from "@angular/core";
@Pipe({name:'prime'})
export class PrimePipeClass implements PipeTransform{
    transform(start: any,end:any) {
        var data="";
        for (var n=start;n<=end;n++){
            var cnt=0;
            for(var i=2;i<n;i++){
                if(n%i==0){
                    cnt++;
                    break;
                }
            }
            if(cnt==0){
                data=data+" "+n;
            }
        }
        return data;
        
    }
}