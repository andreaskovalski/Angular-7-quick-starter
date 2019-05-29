import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAComponent } from './page-a.component';

@NgModule({
  declarations: [PageAComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageAComponent,
  ],
})
export class PageAModule { }
