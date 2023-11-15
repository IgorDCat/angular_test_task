import { Injectable } from '@angular/core';
import { Profile } from '../../app/profile/profile.model';
import { Observable } from 'rxjs';

Injectable({
    providedIn: 'root'
})
export class ProfileService {
    profileData: Profile = {
        email: 'example@mail.ru',
        firstName: 'MyFirstName',
        lastName: 'MyLastName',
        phoneNumber: '+70000000000',
        websiteUrl: ''
    }

    public getProfile$ = new Observable<Profile>(observer => {
        setTimeout(() => {
            observer.next(this.profileData)
        }, 500)
    })
}
