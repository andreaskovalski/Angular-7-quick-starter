import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from 'src/app/custom-material.module';
import {PageAComponent} from './page-a.component';
import {HttpClientModule} from '@angular/common/http';
import {PageAService} from './page-a.service';

@NgModule({
    declarations: [PageAComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientModule,
    ],
    exports: [
        PageAComponent,
    ],
    providers: [
        PageAService,
    ]
})
export class PageAModule {
}
