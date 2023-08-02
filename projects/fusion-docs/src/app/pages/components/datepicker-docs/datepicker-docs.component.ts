import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {BehaviorSubject} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {VersionService} from '../../../services/version/version.service';
import {DaterangeCustomPreset} from '@ironsource/fusion-ui/components/daterange/entities/daterange-custom-presets';
import {DaterangeOptions} from '@ironsource/fusion-ui/components/daterange/entities';

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

    daterangeDates: FormControl = new FormControl({
        /*
        startDate: new Date(Date.UTC(2022, 4, 4)),
        endDate: new Date(Date.UTC(2022, 4, 17))
*/
    });
    daterangeMinDate = new Date(Date.UTC(2023, 6, 5));
    daterangeMaxDate = new Date(Date.UTC(2023, 8, 2));

    optionDatePicker$ = new BehaviorSubject<DaterangeOptions>({});

    // region set custom presets
    // set for presets start and end date - just for example.
    // Consumers can do it as they wish
    dateNow = new Date();
    getCurWeek = () => {
        let curr = new Date();
        let day = curr.getDay();
        let firstday = new Date(curr.getTime() - 60 * 60 * 24 * day * 1000);
        let lastday = new Date(firstday.getTime() + 60 * 60 * 24 * 6 * 1000);
        return {
            startDate: firstday,
            endDate: lastday
        };
    };

    minimumDate = new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() - 20));
    maximumDate = new Date();

    customDateRangePresets: DaterangeCustomPreset[] = [
        {
            label: 'Last 5 days',
            startDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() - 4)),
            endDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate()))
        },
        {
            label: 'Last 15 days',
            startDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() - 14)),
            endDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate()))
        },
        {
            label: 'Next 3 days',
            startDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() + 1)),
            endDate: new Date(Date.UTC(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate() + 3))
        },
        {
            label: 'Current Week',
            ...this.getCurWeek()
        }
    ];

    // add it with options.presets
    optionDateRange$ = new BehaviorSubject<DaterangeOptions>({
        format: 'd MMM y',
        presets: this.customDateRangePresets,
        maxDaysInSelectedRange: 5
    });

    // endregion

    constructor(private versionService: VersionService, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formInit();
    }

    get endDateValue(): Date {
        return this.formDatePicker.get('dateEnd').value.date;
    }

    get startDateValue(): Date {
        const date = this.formDatePicker.get('dateStart').value.date;
        return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate() - 1));
    }

    getMaxEndDate(startDate: Date): Date {
        return this.getMaximumEndDate(startDate);
    }

    getMaximumEndDate(startDate) {
        const currentDate: Date = new Date(new Date().toUTCString());

        const maxRangeDate: Date = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 30));

        const maximumDate: Date = new Date(Math.min(currentDate.getTime(), maxRangeDate.getTime()));

        return new Date(Date.UTC(maximumDate.getFullYear(), maximumDate.getMonth(), maximumDate.getDate()));
    }

    formInit(): void {
        this.formDatePicker = this.formBuilder.group({
            datePickerRequired: [null, [Validators.required]],
            datePickerBasic: [{date: new Date()}],
            datePickerFull: [{date: new Date(), timezone: 'UTC'}],
            datePickerDisabled: [{value: {date: new Date()}, disabled: true}],
            dateStart: [{date: new Date()}],
            dateEnd: [{date: new Date()}]
        });

        this.formDatePicker.valueChanges.subscribe(val => {
            console.log('Form Controls changes>', val);

            this.errorMessage = val.datePickerRequired ? '' : 'This is a mandatory field';
        });

        console.log('minDate>', this.minimumDate);
    }
}
