import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { BillingComponent } from './billing/billing.component';
import { AuthGuard } from '../core/services/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'inventory', component: InventoryComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
