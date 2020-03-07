import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PageAFormComponent} from 'src/app/content/page-a/page-a-form/page-a-form.component';
import {PageAFormModule} from 'src/app/content/page-a/page-a-form/page-a-form.module';
import {CustomMaterialModule} from 'src/app/custom-material.module';
import {PageAComponent} from './page-a.component';
import {HttpClientModule} from '@angular/common/http';
import {PageAService} from './page-a.service';

@NgModule({
    declarations: [
        PageAComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        HttpClientModule,
        PageAFormModule,
    ],
    exports: [
        PageAComponent,
    ],
    providers: [
        PageAService,
    ],
    entryComponents: [
        PageAFormComponent,
    ]
})
export class PageAModule {
}
