import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';

@NgModule({
    declarations: [
        ReportsComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '', component: ReportsComponent
        }])
    ],
    exports: [RouterModule]
})
export class ReportsModule {
}
