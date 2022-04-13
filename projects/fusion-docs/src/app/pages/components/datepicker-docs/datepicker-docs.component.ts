import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {BehaviorSubject} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {VersionService} from '../../../services/version/version.service';

@Component({
    selector: 'fusion-datepicker-docs',
    templateUrl: './datepicker-docs.component.html',
    styleUrls: ['./datepicker-docs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerDocsComponent implements OnInit {
    formDatePicker: FormGroup;

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
                    label: 'Combo Box',
                    scrollTo: '#typeComboBox',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'Variations',
            items: [
                {
                    label: 'Including Time Picker',
                    scrollTo: '#variationsTime',
                    scrollOffset: 30
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
                }
            ]
        }
    ];

    errorMessage = 'This is a mandatory field';

    styleUpdatingDelay = 0;
    styleUpdating$ = new BehaviorSubject(false);
    selectedVersion$ = this.versionService.styleVersion$.pipe(
        tap(() => {
            this.styleUpdating$.next(true);
        }),
        delay(this.styleUpdatingDelay),
        tap(() => {
            this.styleUpdating$.next(false);
        })
    );

    constructor(private versionService: VersionService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formInit();
    }

    formInit(): void {
        this.formDatePicker = this.formBuilder.group({
            datePickerRequired: [null, [Validators.required]],
            datePickerBasic: [{date: new Date()}],
            datePickerFull: [{date: new Date(), timezone: 'UTC'}],
            datePickerDisabled: [{value: {date: new Date()}, disabled: true}]
        });

        this.formDatePicker.valueChanges.subscribe(val => {
            console.log('Form Controls changes>', val);

            this.errorMessage = val.datePickerRequired ? '' : 'This is a mandatory field';
        });
    }
}
