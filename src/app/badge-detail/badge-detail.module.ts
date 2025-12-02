import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import { BadgeDetailComponent } from './badge-detail.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [BadgeDetailComponent],
  imports: [
                CommonModule,
                ShareModule,
                MaterialModule
              ],
              schemas:[
                      CUSTOM_ELEMENTS_SCHEMA
                  ],
})
export class BadgeDetailModule { }
