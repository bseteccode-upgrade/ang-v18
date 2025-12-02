import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from './share.module';
import { MatTabsModule } from '@angular/material/tabs';
// mudules
import { IssuerModule } from './issuer/issuer.module';
import { ProductModule } from './product/product.module';
import { StudentModule } from './student/student.module';
import { TranslatorModule } from './translator/translator.module';
import { AppRoutingModule } from './app-routing.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { TirmeSCParametersModule } from './tirme-sc-parameters/tirme-sc-parameters.module';

// components
import { AppComponent } from './app.component';
// import { SigninComponent } from './signin/signin.component';
// import { SignupComponent } from './signup/signup.component';
// import { RegisterComponent } from './register/register.component';
// import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { AccountSettingComponent } from './shared/account-setting/account-setting.component';
// import { ChangePwdComponent } from './shared/change-pwd/change-pwd.component';
import { BadgeDetailComponent } from './badge-detail/badge-detail.component';
import { ActivityProductComponent } from './activity-product/activity-product.component';

// services
import { AuthGuard } from './service/auth.guard';
import { ApiService } from './service/api.service';
import { CommonService } from './service/common.service';
import { TeamService } from './service/team.service';
import { PaymentService } from './service/payment.service';
import { IndexComponent } from './index/index.component';
import { AchievementSearchComponent } from './achievement-search/achievement-search.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentsearchListComponent } from './studentsearch-list/studentsearch-list.component';
import { NgxStripeModule } from 'ngx-stripe';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { provideNgxMask } from 'ngx-mask';
// import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
// import { AgmCoreModule } from '@agm/core';
// import { AgmDirectionModule } from 'agm-direction';
import { AcitvityProcductLocComponent } from './acitvity-procduct-loc/acitvity-procduct-loc.component';
import { DragulaModule } from 'ng2-dragula';
import { ApiregisterComponent } from './apiregister/apiregister.component';
import { NgChartsModule } from 'ng2-charts';
// import { SupViewProductComponent } from './sup-view-product/sup-view-product.component';
// import { RegistersupplychainComponent } from './registersupplychain/registersupplychain.component';
import { NgSelectModule } from '@ng-select/ng-select';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { TirmeSCParametersService } from './tirme-sc-parameters/services/tirme-sc-parameters.service';
import { AutologinComponent } from './autologin/autologin.component';
import { SecurestudentlogComponent } from './securestudentlog/securestudentlog.component';
import { FeedbackComponent } from './feedback/feedback.component';
// import { SecureloginComponent } from './securelogin/securelogin.component';
import { FeedbacknotifyComponent } from './feedbacknotify/feedbacknotify.component';
import { CertDetailviewComponent } from './edu-modal/cert-detailview/cert-detailview.component';
import { BadgeViewComponent } from './edu-modal/badge-view/badge-view.component';
import { PreviewCertComponent } from './edu-modal/preview-cert/preview-cert.component';
import { PreviewBadgeComponent } from './edu-modal/preview-badge/preview-badge.component';
import { SharelinkedinPreviewComponent } from './edu-modal/sharelinkedin-preview/sharelinkedin-preview.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';



@NgModule({ 
  declarations: [
        AppComponent,
        // AccountSettingComponent,
        PagenotfoundComponent,
        CertDetailviewComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        // RouterModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        // CommonModule,
        // HttpClientModule,

        // MaterialModule,
        ShareModule,
        IssuerModule,
        SharedModule,
        TirmeSCParametersModule,
        StudentModule,
        TranslatorModule,
        NgxSmartModalModule.forRoot(),
        TranslateModule.forRoot(),
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        NgxStripeModule.forRoot('pk_test_51Hvg2pEg9gjRhj81caE9NMMlTYjm6O9KMdQGvJjFgiDuqb0w1WxtTwPbs0UWvb4Xevk3Z4nJu3e2OLtMDpLe6uuJ00WN78t7lV'),
        // ColorPickerModule,
        ClipboardModule,
        // GooglePlaceModule,
        DragulaModule.forRoot(),
        // NgChartsModule,
        // AngularEditorModule,
        // NgSelectModule,
        // MatTableModule,
        // MatPaginatorModule,
        // MatSortModule,
        // MatMenuModule,
        // MatButtonModule
      ],
      schemas: [
          CUSTOM_ELEMENTS_SCHEMA
      ],
       providers: [
        AuthGuard,
        ApiService,
        CommonService,
        TeamService,
        PaymentService,
        provideNgxMask(),
        provideHttpClient(withInterceptorsFromDi()),
    ]
   })
export class AppModule {
  constructor() {
  }
}