import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule
  ]
})
export class MaterialDesignModule { }
