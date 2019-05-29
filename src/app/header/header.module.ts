import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';
import {HomePageModule} from '../content/home-page/home-page.module';
import {PageAModule} from '../content/page-a/page-a.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomePageModule,
    PageAModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
