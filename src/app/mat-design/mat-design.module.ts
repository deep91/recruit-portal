import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatCardModule,MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: []
})
export class MatDesignModule { }
