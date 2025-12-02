import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import { AutologinComponent } from './autologin.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [AutologinComponent],
  imports: [
                  CommonModule,
                  ShareModule,
                  MaterialModule
                ],
                schemas:[
                        CUSTOM_ELEMENTS_SCHEMA
                    ],
})
export class AutologinModule { }
