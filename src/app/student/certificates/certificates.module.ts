import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share.module';
import { StudentModule } from '../student.module';
import {CertificatesComponent} from './certificates.component'
import { CertificatesComponentRoutingModule } from './certificates.component-routing.module'
import { MaterialModule } from 'src/app/material.module';
// import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [CertificatesComponent],
  imports: [
    CommonModule,
    ShareModule,
    // StudentModule,
    CertificatesComponentRoutingModule,
    MaterialModule
    // NgxSmartModalModule
  ],
  exports: [
        // NgxSmartModalModule
    ]
})
export class CertificatesModule { }
