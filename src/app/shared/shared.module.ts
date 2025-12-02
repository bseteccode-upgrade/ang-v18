import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { TranslateModule } from '@ngx-translate/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { MatStepperModule } from '@angular/material/stepper';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PaymentComponent } from './payment/payment.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { MaterialModule } from '../material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    // AccountSettingComponent,
    // PaymentComponent,
    TeamListComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule,
    RouterModule
    // NgxSmartModalModule,
    // TranslateModule.forChild(),

    // FormsModule,
    // ReactiveFormsModule,

    // MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatIconModule,
    // MatButtonModule,
    // MatTooltipModule,
    // MatTableModule,
    // MatTabsModule,
    // MatSlideToggleModule,
    // MatPaginatorModule,
    // RouterModule
    // PaymentComponent

  ],
  exports: [
    // AccountSettingComponent,
    // PaymentComponent,

    // TranslateModule,
    // FormsModule,
    // ReactiveFormsModule,
    // MatTableModule,
    // MatTabsModule,
    // MatSlideToggleModule,
    // MatTooltipModule,
    // NgxSmartModalModule
  ]
})
export class SharedModule { 
  constructor() {
    console.log("🚦 SharedModule Routes:");
  }
}
