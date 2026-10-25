import { Injectable, signal } from '@angular/core';

export type AvailableLocale = 'es'|'pt'|'en';

@Injectable({providedIn: 'root'})
export class LocalService {
    
    private currentLocale = signal<AvailableLocale>('es');
    
    constructor() {
        this.currentLocale.set(localStorage.getItem('locale') as AvailableLocale ?? 'es');
    }

    public get getLocale() {
        return this.currentLocale();
    }

    changeLocale(locale: AvailableLocale) {
        this.currentLocale.set(locale);
    }
    
}