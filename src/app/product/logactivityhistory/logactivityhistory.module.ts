import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogactivityhistoryComponent } from './logactivityhistory.component';
import { ShareModule } from 'src/app/share.module';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [LogactivityhistoryComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ],
  schemas:[
                  CUSTOM_ELEMENTS_SCHEMA
              ],
})
export class LogactivityhistoryModule { }
