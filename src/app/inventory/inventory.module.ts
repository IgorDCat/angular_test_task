import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';

@NgModule({
    declarations: [
        InventoryComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '', component: InventoryComponent
        }])
    ],
    exports: [RouterModule]
})
export class InventoryModule {
}
