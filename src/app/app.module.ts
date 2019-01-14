import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';
//Custom Modules
import {MatDesignModule} from './mat-design/mat-design.module';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
 imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    //Custom Modules
    MatDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
