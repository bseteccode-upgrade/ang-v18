import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharelinkedinPreviewComponent } from './sharelinkedin-preview.component';
import { ShareModule } from 'src/app/share.module';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [SharelinkedinPreviewComponent],
  imports: [
            CommonModule,
            ShareModule,
            MaterialModule
          ],
          schemas:[
                  CUSTOM_ELEMENTS_SCHEMA
              ],
})
export class SharelinkedinPreviewModule { }
