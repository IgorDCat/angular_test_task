import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '', component: ProfileComponent
        }]),
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [RouterModule]
})
export class ProfileModule {
}
