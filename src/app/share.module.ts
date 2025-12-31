import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgChartsModule } from 'ng2-charts';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { TranslateModule } from '@ngx-translate/core';
import { QuillModule } from 'ngx-quill';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { HeaderComponent } from './shared/header/header.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { NgSlimScrollModule } from './ngx-slimscroll/module/ngx-slimscroll.module';
import { FooterComponent } from './shared/footer/footer.component';
import { PaymentComponent } from './shared/payment/payment.component';

import { NgxPrintModule } from 'ngx-print';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ColorPickerModule } from 'ngx-color-picker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MaterialModule } from './material.module';
import { AccountSettingComponent } from './shared/account-setting/account-setting.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    RouterModule,
    MaterialModule,
    NgChartsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    NgSlimScrollModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatExpansionModule,
    QuillModule,
    NgxPrintModule,
    NgSelectModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatSortModule,
    MatTabsModule,
    NgxFileDropModule,
    ColorPickerModule,
    MatOptionModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    PaymentComponent,
    AccountSettingComponent,
  ],
  schemas: [
          CUSTOM_ELEMENTS_SCHEMA
      ],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    SideNavComponent,
    PaymentComponent,
    AccountSettingComponent,
    RouterModule,
    
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NgChartsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    NgSlimScrollModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    QuillModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatTabsModule,
    
    NgxFileDropModule,
    ColorPickerModule,
    NgSelectModule,
    MatSortModule
  ]
})
export class ShareModule { 
  constructor() {
    console.log("🚦 ShareModule Routes:");
  }
  
}
