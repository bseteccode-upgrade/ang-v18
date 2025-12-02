import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ShareModule } from '../share.module';
import { IssuerComponent } from './issuer.component';
import { IssuerRoutingModule } from './issuer-routing.module';

import { AddStudentComponent } from './add-student/add-student.component';
import { CertificateUploadComponent } from './certificate-upload/certificate-upload.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { StudentUploadComponent } from './student-upload/student-upload.component';
import { CertificateService } from './services/certificate.service';
import { StudentsComponent } from './students/students.component';
import { StudentService } from './services/student.service';
import { NewAssignComponent } from './new-assign/new-assign.component';
// import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from '../../slimscroll_api';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteScrollDirective,InfiniteScrollModule } from "ngx-infinite-scroll";
import { ColorPickerModule } from 'ngx-color-picker';
import { NgSelectModule } from '@ng-select/ng-select';

import { BlockchainComponent } from './blockchain/blockchain.component';
import { UsercoursesComponent } from './usercourses/usercourses.component';
import { CannedMessageComponent } from './canned-message/canned-message.component';
import { LogsComponent } from './logs/logs.component';
import { ExsitingstudentComponent } from './exsitingstudent/exsitingstudent.component';
import { AchievementExportComponent } from './achievement-export/achievement-export.component';
import { CustomFeatureComponent } from './custom-feature/custom-feature.component';
import { MandrilComponent } from './mandril/mandril.component';
import { RequestComponent } from './request/request.component';
import { MultipleEmailComponent } from './multiple-email/multiple-email.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CertificateFormComponent } from './certificate-form/certificate-form.component';

import { NgxFileDropModule } from 'ngx-file-drop';
import { ZohopopupembaedComponent } from './zohopopupembaed/zohopopupembaed.component';
import { CommonplanalertComponent } from './commonplanalert/commonplanalert.component';
import { PlanapiComponent } from './planapi/planapi.component';
import { UserVerifyPopupComponent } from './user-verify-popup/user-verify-popup.component';
import { ContractapiComponent } from './contractapi/contractapi.component';
import { SwaggerComponent } from './swagger/swagger.component';
import { CustomapiComponent } from './customapi/customapi.component';
import { SupplychainapiComponent } from './supplychainapi/supplychainapi.component';
import { MatricgraphComponent } from './matricgraph/matricgraph.component';
import { NgChartsModule } from 'ng2-charts';
// import { Daterangepicker } from 'ng2-daterangepicker';
import { DragulaModule } from 'ng2-dragula';
import { CertcreationComponent } from './certcreation/certcreation.component';
import { FaqComponent } from './faq/faq.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SupplychainlogsComponent } from './supplychainlogs/supplychainlogs.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { PostConfirmationComponent } from './post-confirmation/post-confirmation.component';
import { EmailLogsComponent } from './email-logs/email-logs.component';
import { PubdashboardComponent } from './pubdashboard/pubdashboard.component';
import { NewCannedmessageComponent } from './new-cannedmessage/new-cannedmessage.component';
import { CannedaddeditComponent } from './cannedaddedit/cannedaddedit.component';
import { CanneddeleteComponent } from './canneddelete/canneddelete.component';

import { MarketingToolComponent } from './marketing-tool/marketing-tool.component';
import { MarketingToolAddEditComponent } from './marketing-tool-add-edit/marketing-tool-add-edit.component';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { PreviewDetailsComponent } from './preview-details/preview-details.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { CommonService } from '../service/common.service';
import { ApiService } from '../service/api.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';
import { PaymentComponent } from '../shared/payment/payment.component';
// import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';



@NgModule({ 
    declarations: [
        IssuerComponent,
        AddStudentComponent,
        CertificateUploadComponent,
        CertificatesComponent,
        StudentUploadComponent,
        StudentsComponent,
        NewAssignComponent,
        BlockchainComponent,
        UsercoursesComponent,
        CannedMessageComponent,
        LogsComponent,
        FaqComponent,
        ExsitingstudentComponent,
        AchievementExportComponent,
        CustomFeatureComponent,
        MandrilComponent,
        RequestComponent,
        MultipleEmailComponent,
        CourseFormComponent,
        CertificateFormComponent,
        ZohopopupembaedComponent,
        PlanapiComponent,
        UserVerifyPopupComponent,
        ContractapiComponent,
        SwaggerComponent,
        CustomapiComponent,
        SupplychainapiComponent,
        MatricgraphComponent,
        CertcreationComponent,
        // FaqComponent,
        SupplychainlogsComponent,
        StudentNewComponent,
        PostConfirmationComponent,
        CanneddeleteComponent,
        EmailLogsComponent,
        PubdashboardComponent,
        NewCannedmessageComponent,
        CannedaddeditComponent,
        // CanneddeleteComponent,
        MarketingToolComponent,
        MarketingToolAddEditComponent,
        SkillsDialogComponent,
        PreviewDetailsComponent,
        CommonplanalertComponent,
        // PaymentComponent
    ],
    imports: [
        CommonModule,
        IssuerRoutingModule,
        ShareModule,
        // RouterModule,
        // SharedModule,
        MaterialModule,
        // FormsModule,
        // ReactiveFormsModule,
        // InfiniteScrollModule,
        InfiniteScrollDirective,
        // NgSelectModule,
        // NgxFileDropModule,
        // ColorPickerModule,
        // NgChartsModule,
        // Daterangepicker,
        // DragulaModule.forRoot(),
        // AngularEditorModule,
        // NgSlimScrollModule,
        // MatStepperModule,
        MatFormFieldModule,
        // MatInputModule,
        // MatIconModule,
        // MatDatepickerModule,
        // MatNativeDateModule,
        // MatTooltipModule,
        // MatButtonModule,
        // MatSnackBarModule,
        
        // TranslateModule.forRoot(),
        // TranslateModule.forChild()
    ], 
    
    // exports: [
    //     // CommonplanalertComponent
    //     NgxFileDropModule
    // ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    // entryComponents: [
    //     PostConfirmationComponent,
    //     CanneddeleteComponent,
    //     SkillsDialogComponent,
    //     PreviewDetailsComponent
    // ], 
    // providers: [
    //     // ApiService,
    //     // CommonService,
    //     CertificateService,
    //     StudentService,
    //     provideHttpClient(withInterceptorsFromDi()),
    // ] 
})
export class IssuerModule { 
    constructor() {
    console.log("🚦 IssuerModule Routes:");
  }
}


