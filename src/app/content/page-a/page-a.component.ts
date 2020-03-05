import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PageAService} from './page-a.service';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'page-a',
    templateUrl: './page-a.component.html',
    styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {

    constructor(
        private service: PageAService,
    ) {
        this.createForm();
    }

    public form: FormGroup;
    public messageIsSent: boolean;

    public createForm(): void {
        this.form = new FormGroup({
            first: new FormControl(),
            last: new FormControl(),
        });
    }


    ngOnInit() {
        this.service.getData()
            .pipe(
                tap((response: any) => this.form.patchValue(response)),
            )
            .subscribe();

        this.form.valueChanges.subscribe(() => this.messageIsSent = false);
    }

    public onSubmit(): void {
        this.messageIsSent = true;
    }
}
