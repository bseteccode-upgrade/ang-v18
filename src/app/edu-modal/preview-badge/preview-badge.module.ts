import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share.module';
import { PreviewBadgeComponent } from './preview-badge.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [PreviewBadgeComponent],
  imports: [
      CommonModule,
      ShareModule,
      MaterialModule
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class PreviewBadgeModule { }
