import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'fusion-scroll-to-docs',
    templateUrl: './scroll-to-docs.component.html',
    styleUrls: ['./scroll-to-docs.component.scss']
})
export class ScrollToDocsComponent {
    form = this.fb.group({
        first: [null, Validators.required],
        second: [null, Validators.required],
        third: [null, Validators.required],
        fourth: [null, Validators.required]
    });

    rightMenu = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                }
            ]
        }
    ];

    constructor(private fb: FormBuilder) {}
}
