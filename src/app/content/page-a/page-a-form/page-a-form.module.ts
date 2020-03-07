import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAFormComponent } from 'src/app/content/page-a/page-a-form/page-a-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        PageAFormComponent,
    ],
    exports: [
        PageAFormComponent,
    ],
})
export class PageAFormModule {
}
