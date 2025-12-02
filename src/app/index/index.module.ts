import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import { IndexComponent } from './index.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ],
  schemas:[
          CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class IndexModule { }
