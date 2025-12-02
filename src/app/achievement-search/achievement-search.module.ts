import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementSearchComponent } from './achievement-search.component';
import { ShareModule } from '../share.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [AchievementSearchComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
  ],
  schemas:[
              CUSTOM_ELEMENTS_SCHEMA
          ],
})
export class AchievementSearchModule { }
