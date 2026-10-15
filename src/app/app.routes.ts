import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'Pipes - Basic',
        loadComponent: () => import('./pages/basic-page/basic-page')
    },
    {
        path: 'numbers',
        title: 'Pipes - Numbers',
        loadComponent: () => import('./pages/number-page/number-page')
    },
    {
        path: 'uncommon',
        title: 'Pipes - Uncommon',
        loadComponent: () => import('./pages/uncommon-page/uncommon-page')
    },
    {
        path: 'custom',
        title: 'Pipes - Custom',
        loadComponent: () => import('./pages/custom-page/custom-page')
    },
    {
        path: '**',
        redirectTo: 'basic'
    }
];
