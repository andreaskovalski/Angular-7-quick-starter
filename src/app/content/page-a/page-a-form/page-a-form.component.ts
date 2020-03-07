import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {IFormConfig, IPageAFormActionsInterface} from 'src/app/content/page-a/page-a-form/page-a-form.interface';

@Component({
    selector: 'page-a-form',
    templateUrl: './page-a-form.component.html',
    styleUrls: ['./page-a-form.component.scss'],
})
export class PageAFormComponent implements OnInit {

    constructor(
        public activeModal: NgbActiveModal
    ) {
        this.createForm();
    }

    public form: FormGroup;
    public formConfig: IFormConfig = {
        showDelete: false,
        formTitle: 'Fill Data',
    };
    public closeSubscription$: Subject<IPageAFormActionsInterface> = new Subject();

    public createForm(): void {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            location: new FormControl(),
            age: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]),
        });
    }

    public ngOnInit(): void {
        console.log(this.form);
        // this.form.valueChanges.subscribe((res) => console.log(res))
    }

    public onSubmit(): void {
        if (this.form.valid) {
            this.activeModal.close();
            this.closeSubscription$.next({ formAction: 'save' });

            return;
        }

        this.form.markAllAsTouched();
    }

    public onDelete(): void {
        this.activeModal.close();
        this.closeSubscription$.next({ formAction: 'delete' });
    }

    public isControlValid(control): boolean {
        return this.form.get(control).invalid && this.form.get(control).touched;
    }
}
