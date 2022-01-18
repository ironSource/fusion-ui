import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';
import {DaterangeOptions, DaterangePresets, DaterangeService, StyleVersion, VersionService} from '@ironsrc/fusion-ui';
import {takeUntil} from 'rxjs/operators';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';

const rightMenuItems = [
    {
        label: 'Single Date Picker',
        scrollTo: '#typeSingleDatePicker',
        scrollOffset: 0
    },
    {
        label: 'No Preset',
        scrollTo: '#typeRegularNoPreset',
        scrollOffset: 0
    },
    {
        label: 'Regular With Default Presets',
        scrollTo: '#typeRegular',
        scrollOffset: 0
    },
    {
        label: 'Custom Daterange & Presets',
        scrollTo: '#typeOldDate',
        scrollOffset: 0
    }
];

@Component({
    selector: 'fusion-daterange-docs',
    templateUrl: './daterange-docs.component.html',
    styleUrls: ['./daterange-docs.component.scss']
})
export class DaterangeDocsComponent implements OnInit, OnDestroy {
    date = new Date('2020-04-15 10:00:00');
    startDate = new Date('2020-04-01 10:00:00');
    endDate = new Date('2020-04-27 10:00:00');
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Daterange',
            items: rightMenuItems
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
    onDestroy$ = new Subject();
    styleVersion$ = this.versionService.styleVersion$;
    StyleVersion = StyleVersion;
    daterangeDefault: FormControl = new FormControl(this.daterangeService.getPresetRange(DaterangePresets.Yesterday));
    daterangeDatePicker: FormControl = new FormControl({
        date: new Date(Date.UTC(2022, 0, 10))
    });
    daterangeMinDate = new Date(Date.UTC(2022, 0, 5));
    daterangeMaxDate = new Date(Date.UTC(2022, 0, 25));

    daterangeCustom: FormControl = new FormControl({
        startDate: new Date(Date.UTC(2022, 0, 3)),
        endDate: new Date(Date.UTC(2022, 5, 9))
    });

    minDate = new Date(Date.UTC(2021, 11, 23));
    maxDate = new Date(Date.UTC(2022, 0, 23));

    options$ = new BehaviorSubject<DaterangeOptions>({
        presets: [DaterangePresets.Today, DaterangePresets.Yesterday, DaterangePresets.ThisMonth, DaterangePresets.LastMonth],
        format: 'd MMM y'
    });

    optionNoPresets: DaterangeOptions = {
        presets: false
    };
    optionOnlyDatePicker$ = new BehaviorSubject<DaterangeOptions>({
        calendarAmount: 1,
        presets: false,
        format: 'd MMM y'
    });

    constructor(
        private daterangeService: DaterangeService,
        private versionService: VersionService,
        private docLayoutService: DocsLayoutService
    ) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Daterange'
        });

        this.daterangeDefault.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => console.log(value));

        this.daterangeCustom.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => console.log(value));

        this.daterangeDatePicker.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => console.log(value));

        this.styleVersion$.pipe(takeUntil(this.onDestroy$)).subscribe(styleVersion => {
            this.rightMenu = [
                {
                    title: this.rightMenu[0].title,
                    items: styleVersion === StyleVersion.V2 ? rightMenuItems : rightMenuItems.slice(2)
                },
                this.rightMenu[1]
            ];
            // update formats by StyleVersion
            const dateFormat = styleVersion === StyleVersion.V2 ? 'd MMM, y' : 'd MMM y';
            this.optionOnlyDatePicker$.next({
                calendarAmount: 1,
                presets: false,
                format: dateFormat
            });
            this.options$.next({
                presets: [
                    DaterangePresets.Today,
                    DaterangePresets.Yesterday,
                    DaterangePresets.ThisMonth,
                    DaterangePresets.LastMonth,
                    DaterangePresets.Last60Days
                ],
                format: dateFormat
            });
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
