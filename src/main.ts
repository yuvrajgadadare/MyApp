import { bootstrapApplication ,platformBrowser} from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { ModuleClass } from './RoutingDemo/MainModule';
// import { ModuleClass } from './ModuleDemo/MainModule';
// // import { App } from './app/app';
// // import { ProjectClass } from './Project/ProjectComponent';
// // import { SampleClass } from './Project/SampleComponent';
// // import { TestClass } from './Project/TestComponent';
// // import { StudentClass } from './StudentTask/StudentComponent';
// // import { SampleClass } from './DI/SampleComponent';
// import { PipeClass } from './Pipes/PipeComponent';
// import { FirstClass } from './ModuleDemo/FirstComponent';
 
// bootstrapApplication(FirstClass, appConfig)
//   .catch((err) => console.error(err));
 

platformBrowser().bootstrapModule(ModuleClass).catch(e=>{
  console.log(e);
})