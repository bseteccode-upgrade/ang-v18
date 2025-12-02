import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { BadgeDetailComponent } from './badge-detail/badge-detail.component';
import { ActivityProductComponent } from './activity-product/activity-product.component';
import { IndexComponent } from './index/index.component';
import { AchievementSearchComponent } from './achievement-search/achievement-search.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentsearchListComponent } from './studentsearch-list/studentsearch-list.component';
import { AcitvityProcductLocComponent } from './acitvity-procduct-loc/acitvity-procduct-loc.component';
import { ApiregisterComponent } from './apiregister/apiregister.component';
import { SupViewProductComponent } from './sup-view-product/sup-view-product.component';
import { RegistersupplychainComponent } from './registersupplychain/registersupplychain.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AutologinComponent } from './autologin/autologin.component';
import { SecurestudentlogComponent } from './securestudentlog/securestudentlog.component';
import { SecureloginComponent } from './securelogin/securelogin.component';

const routes: Routes = [
  // { path: 'signin', loadChildren: () =>
    // import('./signin/signin.module').then(m => m.SigninModule)  },
  { path: '', component: SigninComponent , pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'securelog/:token/:regtype', loadChildren: () =>
    import('./securelogin/securelogin.module').then(m => m.SecureloginModule) },
  // { path: 'securelog/:token/:regtype', component: SecureloginComponent },
  { path: 'student/secure/log/:token', loadChildren: () =>
    import('./securestudentlog/securestudentlog.module').then(m => m.SecurestudentlogModule) },
  // { path: 'student/secure/log/:token', component: SecurestudentlogComponent },
  { path: 'signin/:id', loadChildren: () =>
    import('./signin/signin.module').then(m => m.SigninModule) },
  // { path: 'signin/:id', component: SigninComponent },
  { path: 'autologin/:token', loadChildren: () =>
    import('./autologin/autologin.module').then(m => m.AutologinModule) },
  // { path: 'autologin/:token', component: AutologinComponent },
  // { path: 'signup', component: SignupComponent },
  { path: 'signup', loadChildren: () =>
    import('./signup/signup.module').then(m => m.SignupModule) },
  { path: 'register', loadChildren: () =>
    import('./register/register.module').then(m => m.RegisterModule) },
  // { path: 'register', component: RegisterComponent },
  // { path: 'api-register', component: ApiregisterComponent },
  // { path: 'supply-register', component: RegistersupplychainComponent },
  { path: 'reset', loadChildren: () =>
    import('./reset-pwd/reset-pwd.module').then(m => m.ResetPwdModule) },
  // { path: 'reset', component: ResetPwdComponent },
  { path: 'forgot-pwd', loadChildren: () =>
    import('./forgot-pwd/forgot-pwd.module').then(m => m.ForgotPwdModule) },
  // { path: 'forgot-pwd', component: ForgotPwdComponent },
  { path: 'badgedetail', loadChildren: () =>
    import('./badge-detail/badge-detail.module').then(m => m.BadgeDetailModule) },
  // { path: 'badgedetail', component: BadgeDetailComponent },
  // { path: 'batches', component: ActivityProductComponent },
  { path: 'batches', loadChildren: () =>
    import('./activity-product/activity-product.module').then(m => m.ActivityProductModule) },
  { path: 'embed/achievementsearch', loadChildren: () =>
    import('./achievement-search/achievement-search.module').then(m => m.AchievementSearchModule) },
  // { path: 'embed/achievementsearch', component: AchievementSearchComponent },
  { path: 'embed/studentsearch', loadChildren: () =>
    import('./student-search/student-search.module').then(m => m.StudentSearchModule) },
  // { path: 'embed/studentsearch', component: StudentSearchComponent },
  { path: 'embed/studentlist', loadChildren: () =>
    import('./studentsearch-list/studentsearch-list.module').then(m => m.StudentsearchListModule) },
  // { path: 'embed/studentlist', component: StudentsearchListComponent },
  // { path: 'prductlocation', component: AcitvityProcductLocComponent },AcitvityProcductLocModule
  { path: 'prductlocation', loadChildren: () =>
    import('./acitvity-procduct-loc/acitvity-procduct-loc.module').then(m => m.AcitvityProcductLocModule) },
  // { path: 'viewproduct/:id', component: SupViewProductComponent },
  { path: 'viewproduct/:id', loadChildren: () =>
    import('./sup-view-product/sup-view-product.module').then(m => m.SupViewProductModule) },
  
  // {path: 'issuer',
  //   loadChildren: () => import('./issuer/issuer.module').then(m => m.IssuerModule)
  // }
];
// ,{ enableTracing: true }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor() {
    console.log("🚦 App Routes:", routes);
  }
}
