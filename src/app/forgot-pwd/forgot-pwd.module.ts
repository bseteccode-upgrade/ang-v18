import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPwdComponent } from './forgot-pwd.component';
import { ShareModule } from '../share.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [ForgotPwdComponent],
  imports: [
      CommonModule,
      ShareModule,
      MaterialModule
    ],
    schemas:[
            CUSTOM_ELEMENTS_SCHEMA
        ],
})
export class ForgotPwdModule { }
