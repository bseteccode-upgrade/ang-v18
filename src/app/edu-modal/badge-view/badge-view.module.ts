import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share.module';
import { BadgeViewComponent } from './badge-view.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [BadgeViewComponent],
  imports: [
              CommonModule,
              ShareModule,
              MaterialModule
            ],
            schemas:[
                    CUSTOM_ELEMENTS_SCHEMA
                ],
})
export class BadgeViewModule { }
