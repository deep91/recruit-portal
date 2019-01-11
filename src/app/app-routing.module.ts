import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';


const routes: Routes=[
  {path:'create',component:SignUpComponent }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRoutingModule { }
