import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CustomMaterialModule} from 'src/app/custom-material.module';

import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';
import {ContentModule} from './content/content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    ContentModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
