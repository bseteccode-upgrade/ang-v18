import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share.module';
import { ChangePwdComponent } from './change-pwd.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [ChangePwdComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ]
})
export class ChangePwdModule { }
