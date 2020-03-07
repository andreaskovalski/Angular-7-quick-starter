import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../content/home-page/home-page.component';
import { PageAComponent } from '../content/page-a/page-a.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'page-a', component: PageAComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [],
})

export class HeaderRoutingModule {
}
