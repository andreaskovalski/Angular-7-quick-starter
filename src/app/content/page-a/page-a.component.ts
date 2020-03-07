import {
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { PageAFormComponent } from 'src/app/content/page-a/page-a-form/page-a-form.component';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { IPageAFormActionsInterface } from 'src/app/content/page-a/page-a-form/page-a-form.interface';
import { IFormData } from 'src/app/content/page-a/page-a.interface';
import { PageAService } from 'src/app/content/page-a/page-a.service';


@Component({
    selector: 'page-a',
    templateUrl: './page-a.component.html',
    styleUrls: ['./page-a.component.scss'],
})

export class PageAComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public tableData: IFormData[] = [];

    private readonly storageKey: string = 'form';
    private componentDestroyed$: Subject<void> = new Subject();

    constructor(
        private modalService: NgbModal,
        private pageAService: PageAService,
    ) {
        this.tableData = this.pageAService.getItem(this.storageKey);
    }

    public ngOnInit(): void {
        // if (this.localStorage.length) {
        //     this.tableData = (JSON.parse(this.localStorage.getItem('form')));
        // }
    }

    public open(): void {
        const modalRef: NgbModalRef = this.modalService.open(PageAFormComponent);
        this.form = modalRef.componentInstance.form;

        modalRef.componentInstance.closeSubscription$
            .pipe(
                takeUntil(this.componentDestroyed$),
                filter((formAction: IPageAFormActionsInterface) => formAction.formAction === 'save'),
                tap(() => {
                    this.tableData.push(this.form.value);
                    this.setItem();
                }),
            )
            .subscribe();
    }

    public editTable(rowData: IFormData, index: number): void {
        const modalRef: NgbModalRef = this.modalService.open(PageAFormComponent);
        modalRef.componentInstance.formConfig = {
            ...modalRef.componentInstance.formConfig,
            formTitle: 'Edit Data',
            showDelete: true,
        };

        this.form = modalRef.componentInstance.form;
        this.form.patchValue(rowData);

        modalRef.componentInstance.closeSubscription$
            .pipe(
                takeUntil(this.componentDestroyed$),
                tap((action: IPageAFormActionsInterface) => {

                    switch (action.formAction) {
                        case 'save':
                            this.tableData[index] = this.form.value;
                            this.setItem();

                            return;

                        case 'delete':
                            this.tableData.splice(index, 1);
                            this.setItem();

                            return;
                    }

                }),
            )
            .subscribe();
    }

    private setItem(): void {
        this.pageAService.setItem(this.storageKey, this.tableData);
    }

    public clearStorage(): void {
        this.tableData.length = 0;
        this.pageAService.deleteData(this.storageKey);
    }

    public ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
