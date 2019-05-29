import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import {HomePageModule} from './home-page/home-page.module';
import {RouterModule} from '@angular/router';
import {HeaderRoutingModule} from '../header/header-routing.module';
import {PageAModule} from "./page-a/page-a.module";

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    HomePageModule,
    RouterModule,
    HeaderRoutingModule,
    PageAModule,
  ],
  exports: [
    ContentComponent,
  ]
})
export class ContentModule { }
