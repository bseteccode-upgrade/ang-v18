import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share.module';

import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { StudentsearchListComponent } from './studentsearch-list.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    StudentsearchListComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MaterialModule
    // TranslateModule,
    // MatTooltipModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatButtonModule,
    // MatIconModule,
  ]
})
export class StudentsearchListModule { }
