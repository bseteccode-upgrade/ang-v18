import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcitvityProcductLocComponent } from './acitvity-procduct-loc.component';
import { ShareModule } from '../share.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [AcitvityProcductLocComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ],
  schemas:[
      CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AcitvityProcductLocModule { }
