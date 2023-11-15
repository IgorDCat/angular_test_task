import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { BillingComponent } from './billing/billing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../shared';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProfileComponent,
        NavbarComponent,
        InventoryComponent,
        ReportsComponent,
        BillingComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
    providers: [ProfileService],
    bootstrap: [AppComponent]
})
export class AppModule { }
