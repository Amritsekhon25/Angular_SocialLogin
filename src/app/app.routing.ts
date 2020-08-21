import { RouterModule, Routes } from '@angular/router';
import {DemoComponent} from "./demo/demo.component";
import {AppComponent} from "./app.component";
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'home', component: WelcomeComponent },

];

export const routing = RouterModule.forRoot(routes);