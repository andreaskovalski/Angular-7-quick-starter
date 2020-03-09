import { Injectable } from '@angular/core';
import { IFormData } from 'src/app/content/page-a/page-a.interface';

Injectable();

export class PageAService {
    private localStorage: Storage = window.localStorage;

    public getItem(key: string): IFormData[] {
        return JSON.parse(this.localStorage.getItem(key)) || [];
    }

    public setItem(key: string, data: IFormData[]): void {
        this.localStorage.setItem(key, JSON.stringify(data));
    }

    public deleteData(key: string): void {
        this.setItem(key, []);
    }
}
