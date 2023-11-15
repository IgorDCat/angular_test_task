import { Injectable } from '@angular/core';
import { Profile } from '../../app/profile/profile.model';
import { delay, Observable, of } from 'rxjs';
import { ProfileUpdateService } from './profile-update.service';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(private profileUpdateService: ProfileUpdateService) {
    }

    profileData: Profile = {
        email: 'example@mail.ru',
        firstName: 'MyFirstName',
        lastName: 'MyLastName',
        phoneNumber: '+70000000000',
        websiteUrl: ''
    }

    getProfile$ = new Observable<Profile>(observer => {
        setTimeout(() => {
            observer.next(this.profileData)
        }, 500)
    })

    isLengthOfFieldShort (value: Profile) {
        return of(value.firstName.length <= 1 || value.lastName.length <= 1).pipe(
            delay(500)
        ).subscribe(res => res && this.profileUpdateService.setError())
    }

}
