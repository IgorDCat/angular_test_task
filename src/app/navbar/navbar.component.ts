import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services';
import { LOCALSTORAGE_AUTH } from '../../shared/consts/consts';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
    isAuth = !!localStorage.getItem(LOCALSTORAGE_AUTH)

    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
        this.authService.isLogin.subscribe(res => this.isAuth = res)
    }

}
