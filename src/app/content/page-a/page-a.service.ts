import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

Injectable();

export class PageAService {
    public getData(): Observable<any> {
       return of({
            first: 'Andrey',
           last: 'Kovalchuk',
       });
    }
}
