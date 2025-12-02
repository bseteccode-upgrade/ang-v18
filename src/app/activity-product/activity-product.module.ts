import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityProductComponent } from './activity-product.component';
import { ShareModule } from '../share.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [ActivityProductComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ],
  schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class ActivityProductModule { }
