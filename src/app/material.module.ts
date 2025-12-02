import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { TranslateModule } from '@ngx-translate/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  imports: [
    NgxSmartModalModule.forChild(),
    TranslateModule.forChild(),
    FroalaEditorModule,
    FroalaViewModule,
  ],
  exports: [
    NgxSmartModalModule,
    TranslateModule,
    FroalaEditorModule,
    FroalaViewModule
  ]
})
export class MaterialModule {}
