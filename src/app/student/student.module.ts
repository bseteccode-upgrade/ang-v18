// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { StudentRoutingModule } from './student-routing.module';
// import { CertificatesComponent } from './certificates/certificates.component';
// import { MoocListComponent } from './mooc-list/mooc-list.component';
// import { MoocCertificateComponent } from './mooc-certificate/mooc-certificate.component';
// import { StudentComponent } from './student.component';
// import { MoocService } from './services/mooc.service';
// import { ShareModule } from '../share.module';
// import { EductionExperienceComponent } from './eduction-experience/eduction-experience.component';
// import { PostConfirmationComponent } from './post-confirmation/post-confirmation.component';
// import { YourcredentialComponent } from './yourcredential/yourcredential.component';
// import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
// import { CertificatesComponent } from './certificates/certificates.component';
import { MoocListComponent } from './mooc-list/mooc-list.component';
import { MoocCertificateComponent } from './mooc-certificate/mooc-certificate.component';
import { StudentComponent } from './student.component';
import { EductionExperienceComponent } from './eduction-experience/eduction-experience.component';
import { PostConfirmationComponent } from './post-confirmation/post-confirmation.component';
import { YourcredentialComponent } from './yourcredential/yourcredential.component';
import { MoocService } from './services/mooc.service';

import { ShareModule } from '../share.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountSettingComponent } from '../shared/account-setting/account-setting.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { TranslateModule } from '@ngx-translate/core';
// import { MatMenuModule } from '@angular/material/menu';


@NgModule({
    imports: [
        CommonModule,
        StudentRoutingModule,
        ShareModule,
        AngularEditorModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
        // NgxSmartModalModule.forChild()
        // MatFormFieldModule,
        // MatInputModule,
        // MatButtonModule,
        // MatIconModule,
        // MatDatepickerModule,
        // MatNativeDateModule,
        // MatTableModule,
        // MatPaginatorModule,
        // MatTooltipModule,
        // TranslateModule,
        // MatMenuModule
    ],
    declarations: [
        MoocCertificateComponent,
        // CertificatesComponent,
        MoocListComponent,
        StudentComponent,
        EductionExperienceComponent,
        PostConfirmationComponent,
        YourcredentialComponent,
        // AccountSettingComponent
    ],
    providers: [
        MoocService
    ],
    exports: [
        // NgxSmartModalModule
        AngularEditorModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class StudentModule { }
