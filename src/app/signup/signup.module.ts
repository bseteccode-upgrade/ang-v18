import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import { SignupComponent } from './signup.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ]
})
export class SignupModule { }
