import { EventEmitter, Injectable } from '@angular/core'
import { LOCALSTORAGE_AUTH } from '../../shared/consts/consts';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLogin = new EventEmitter(!!localStorage.getItem(LOCALSTORAGE_AUTH))

    public login() {
        this.isLogin.emit(true)
        localStorage.setItem(LOCALSTORAGE_AUTH, '123')
    }

    public logout() {
        this.isLogin.emit(false)
        localStorage.removeItem(LOCALSTORAGE_AUTH)
    }

    isAuthenticated() {
        return !!localStorage.getItem(LOCALSTORAGE_AUTH)
    }
}
