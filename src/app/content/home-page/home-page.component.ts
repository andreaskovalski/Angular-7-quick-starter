import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { IHomePageInterface } from 'src/app/content/home-page/home-page.interface';
import { HomePageService } from 'src/app/content/home-page/home-page.service';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {

    constructor(
        private homePageService: HomePageService,
    ) {
    }

    public posts: IHomePageInterface[] = [];
    public errorMessage = '';
    private componentDestroyed$: Subject<void> = new Subject();

    public ngOnInit() {
        this.homePageService.getPosts()
            .pipe(
                takeUntil(this.componentDestroyed$),
                tap((posts: IHomePageInterface[]) => this.posts = [...posts]),
                catchError((error: HttpErrorResponse) => this.errorMessage = error.message),
            )
            .subscribe();
    }

    public ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
