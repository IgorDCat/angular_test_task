import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/services/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'profile', loadChildren: ()=> import('app/profile/profile.module').then(m => m.ProfileModule),
        canActivate: [AuthGuard] },
    { path: 'inventory', loadChildren: ()=> import('app/inventory/inventory.module').then(m => m.InventoryModule) },
    { path: 'reports', loadChildren: ()=> import('app/reports/reports.module').then(m => m.ReportsModule) },
    { path: 'billing', loadChildren: ()=> import('app/billing/billing.module').then(m => m.BillingModule) },
    { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
