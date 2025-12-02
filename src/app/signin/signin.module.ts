import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import { SigninComponent } from './signin.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ]
})
export class SigninModule { }
