import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupViewProductComponent } from './sup-view-product.component';
import { SupViewProductRoutingModule } from './sup-view-product-routing.module';
import { ShareModule } from '../share.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    SupViewProductComponent
  ],
  imports: [
    CommonModule,
    SupViewProductRoutingModule,
    ShareModule,
    MaterialModule,
    // NgxSmartModalModule

  ]
})
export class SupViewProductModule { }
