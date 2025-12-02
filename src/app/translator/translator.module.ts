import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslatorRoutingModule } from './translator-routing.module';
import { ShareModule } from '../share.module';
import { LanguagesComponent } from './languages/languages.component';
import { TranslatorComponent } from './translator.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    TranslatorRoutingModule,
    ShareModule, 
    TranslateModule,
  ],
  declarations: [
    LanguagesComponent,
    TranslatorComponent
  ]
})
export class TranslatorModule { }
