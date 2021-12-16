import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'fusion-error-message-docs',
    templateUrl: './error-message-docs.component.html',
    styleUrls: ['./error-message-docs.component.scss']
})
export class ErrorMessageDocsComponent implements OnInit {
    minValue = 10;

    inputForm = this.fb.group({
        input: [null, Validators.required]
    });

    customInputForm = this.fb.group({
        inputMinVal: [null, [Validators.required, Validators.min(this.minValue)]],
        inputMinMaxLen: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });

    rightMenu = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                },
                {
                    label: 'Custom Mapping',
                    scrollTo: '#typeCustom',
                    scrollOffset: 80
                }
            ]
        }
    ];

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.customInputForm.statusChanges.subscribe(status => console.log(status));
    }
}
