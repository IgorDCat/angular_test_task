import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileService } from '../shared';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
    ],
    providers: [ProfileService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
