import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {FormControl, Validators} from '@angular/forms';
import {MonthPickerConfiguration} from '@ironource/fusion-ui';
import {CSS_CUSTOM_PROPERTIES} from './month-picker-docs.config';

@Component({
    selector: 'fusion-month-picker-docs',
    templateUrl: './month-picker-docs.component.html',
    styleUrls: ['./month-picker-docs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthPickerDocsComponent implements OnInit {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                },
                {
                    label: 'With CSS variables',
                    scrollTo: '#typeCss',
                    scrollOffset: 80
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Disabled',
                    scrollTo: '#stateDisabled',
                    scrollOffset: 30
                },
                {
                    label: 'Error',
                    scrollTo: '#stateError',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                },
                {
                    label: 'Events',
                    scrollTo: '#events',
                    scrollOffset: 30
                },
                {
                    label: 'CSS Variables',
                    scrollTo: '#cssVars',
                    scrollOffset: 30
                }
            ]
        }
    ];

    monthPickerBasic = new FormControl();
    monthPicker2 = new FormControl();

    monthPickerDisabled = new FormControl({value: {year: 2021, month: 2}, disabled: true});
    monthPickerError = new FormControl(null, {validators: Validators.required});

    maxDate = new Date('2021-04-10');
    minDate = new Date('2019-05-10');

    monthPickerConfiguration: MonthPickerConfiguration = {
        placeholder: 'Select',
        max: {month: this.maxDate.getMonth(), year: this.maxDate.getFullYear()},
        min: {month: this.minDate.getMonth(), year: this.minDate.getFullYear()}
    };

    customPropertiesTable = CSS_CUSTOM_PROPERTIES;

    get errorMessage(): string {
        return this.monthPickerError.valid ? '' : 'This is a mandatory field';
    }

    constructor() {}

    ngOnInit(): void {
        const selected = new Date();
        selected.setMonth(selected.getMonth() - 1);
        this.monthPicker2.patchValue({year: selected.getFullYear(), month: selected.getMonth()});
    }
}
