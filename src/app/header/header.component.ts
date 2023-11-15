import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../shared';
import { Profile } from '../profile/profile.model';
import { ProfileUpdateService } from '../../shared/services/profile-update.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    headerData: Profile | undefined
    isUpdate = false
    isUpdateError = false

    constructor(
        private profileService: ProfileService,
        public profileUpdateService: ProfileUpdateService
    ) {
    }

    ngOnInit(): void {
        this.profileService.getProfile$.subscribe((value: Profile) => this.headerData = value)
        this.profileUpdateService.isUpdated.subscribe(res => this.isUpdate = res)
        this.profileUpdateService.isError.subscribe(res => this.isUpdateError = res)
    }

}
