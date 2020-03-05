import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PageAService} from './page-a.service';
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
    selector: 'page-a',
    templateUrl: './page-a.component.html',
    styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit, OnDestroy {

    constructor(
        private service: PageAService,
    ) {
        this.createForm();
    }

    public form: FormGroup;
    public messageIsSent: boolean;
    private componentDestroyed$: Subject<void> = new Subject();

    public createForm(): void {
        this.form = new FormGroup({
            first: new FormControl(),
            last: new FormControl(),
        });
    }


    ngOnInit() {
        this.service.getData()
            .pipe(
                takeUntil(this.componentDestroyed$),
                tap((response: any) => this.form.patchValue(response)),
            )
            .subscribe();

        this.form.valueChanges.subscribe(() => this.messageIsSent = false);
    }

    public onSubmit(): void {
        this.messageIsSent = true;
    }

    public ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
