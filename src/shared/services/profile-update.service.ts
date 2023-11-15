import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfileUpdateService {
    isUpdated = new EventEmitter(false)

    setUpdated() {
        this.isUpdated.emit(true)
        setTimeout(() => {
            this.isUpdated.emit(false)
        }, 30000)
    }
}
