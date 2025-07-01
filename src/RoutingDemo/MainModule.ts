import { NgModule, provideZonelessChangeDetection } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MainClass } from "./MainComponent";
import { HomeClass } from "./components/HomeComponent";
import { AboutClass } from "./components/AboutComponent";
import { ContactClass } from "./components/ContactComponent";
import { ServiceClass } from "./components/ServiceComponent";
import {RouterModule} from "@angular/router";

  // Step 1 => Create/Define Routes
const myroutes:any=[
    {path:'home',component:HomeClass},
    {path:'about-us',component:AboutClass},
    {path:'contact-us',component:ContactClass},
    {path:'services',component:ServiceClass}
]


@NgModule({
    imports:[BrowserModule,RouterModule.forRoot(myroutes)], // Step 2=> Register Routes
    declarations:[MainClass,HomeClass,AboutClass,ContactClass,ServiceClass],
    bootstrap:[MainClass],
    providers:[provideZonelessChangeDetection()]
})
export class ModuleClass{
    
}