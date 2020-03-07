import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageService } from './home-page.service';

@NgModule({
    declarations: [
        HomePageComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        HomePageComponent,
    ],
    providers: [
        HomePageService,
    ],
})
export class HomePageModule {
}
