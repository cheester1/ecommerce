import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'productos'
    },
    {
        path:'productos',
        loadComponent:()=>import('./pages/products/products')
    },
    {
        path:'deseos',
        loadComponent:()=>import('./pages/deseos/deseos'),        
    }
];
