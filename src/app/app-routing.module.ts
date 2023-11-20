import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from '../core/services/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'inventory', loadChildren: ()=> import('app/inventory/inventory.module').then(m => m.InventoryModule) },
    { path: 'reports', component: ReportsComponent },
    { path: 'billing', loadChildren: ()=> import('app/billing/billing.module').then(m => m.BillingModule) },
    { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
