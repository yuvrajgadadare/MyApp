import {NgModule, provideZonelessChangeDetection} from "@angular/core";
import { FirstClass } from "./FirstComponent";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SecondClass } from "./SecondComponent";
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[FirstClass,SecondClass],
    bootstrap:[FirstClass],
    providers:[provideZonelessChangeDetection()]
})
export class ModuleClass{
    
}