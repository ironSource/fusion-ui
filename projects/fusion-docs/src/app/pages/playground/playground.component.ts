/* eslint-disable max-len */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
    selector: 'fusion-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
    group: FormGroup;
    CUSTOM_ERRORS_MESSAGES = {
        NO_MATCH: `Passwords don't match`,
        PATTERN: 'Password must include at least one upper case letter, one lower case letter, and one number'
    };

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.group = this.fb.group({
            password: [
                '',
                {
                    validators: [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)]
                }
            ],
            confirm: ['', [Validators.required, compareWith('password')]]
        });

        this.group.statusChanges.subscribe(console.log);
    }
}

export function compareWith(controlName: string): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl) => {
        const matchingControl = control.parent ? control.parent.get(controlName) : null;

        if (!matchingControl || (matchingControl.errors && !matchingControl.errors.noMatch)) {
            return null;
        }

        return control.value !== matchingControl.value ? {noMatch: true} : null;
    };
}
