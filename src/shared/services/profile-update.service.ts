import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfileUpdateService {
    isUpdated = new EventEmitter(false)
    isError = new EventEmitter(false)

    setUpdated() {
        this.isUpdated.emit(true)
        setTimeout(() => {
            this.isUpdated.emit(false)
        }, 30000)
    }
    setError() {
        this.isError.emit(true)
        setTimeout(() => {
            this.isError.emit(false)
        }, 30000)
    }
}
