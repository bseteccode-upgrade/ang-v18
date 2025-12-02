import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import {StudentSearchComponent} from './student-search.component'
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [StudentSearchComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ]
})
export class StudentSearchModule { }
