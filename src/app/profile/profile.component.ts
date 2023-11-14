import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
    form: FormGroup
    maxNameLength = 255
    requiredFieldMessage = 'error: field is required'

    constructor() {
        this.form = new FormGroup({
            email: new FormControl({value: 'example@mail.ru', disabled: true}, [
                Validators.email
            ]),
            firstName: new FormControl('', [
                Validators.maxLength(this.maxNameLength),
                Validators.required
            ]),
            lastName: new FormControl('', [
                Validators.maxLength(this.maxNameLength),
                Validators.required
            ]),
            phoneNumber: new FormControl('', [
                Validators.required,
                Validators.pattern(/^\d{10}$/),
            ]),
            websiteUrl: new FormControl('', [
                Validators.pattern(
                    /^(http(s)?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,2}[a-zA-Z]{2,}(\/\S*)?$/
                ),
            ]),
        })
    }

    ngOnInit(): void {
    }

    submitProfileForm() {
        const formValues = this.form.value
        formValues.phoneNumber = '+7'.concat(this.form.value.phoneNumber)
        console.log(formValues)
    }

}
