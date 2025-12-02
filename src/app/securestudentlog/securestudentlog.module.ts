import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurestudentlogComponent } from './securestudentlog.component';
import { ShareModule } from '../share.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [SecurestudentlogComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ],
  schemas:[
      CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SecurestudentlogModule { }
