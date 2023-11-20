import { NgModule } from '@angular/core';
import { BillingComponent } from './billing.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BillingComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '', component: BillingComponent
        }])
    ],
    exports: [RouterModule]
})
export class BillingModule {
}
