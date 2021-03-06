import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {delay, takeUntil, tap} from 'rxjs/operators';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';
import {DaterangeOptions, DaterangePresets} from '@ironsource/fusion-ui/components/daterange/entities';
import {DaterangeService} from '@ironsource/fusion-ui/components/daterange/common/base';

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
    date = new Date('2022-05-15 10:00:00');
    startDate = new Date('2022-05-01 10:00:00');
    endDate = new Date('2022-05-27 10:00:00');

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
    styleUpdatingDelay = 0;
    styleUpdating$ = new BehaviorSubject(false);
    styleVersion$ = this.versionService.styleVersion$;
    StyleVersion = StyleVersion;
    daterangeDefault: FormControl = new FormControl(this.daterangeService.getPresetRange(DaterangePresets.Yesterday));
    daterangeDatePicker: FormControl = new FormControl({
        date: new Date(Date.UTC(2022, 4, 10))
    });
    daterangeMinDate = new Date(Date.UTC(2022, 4, 5));
    daterangeMaxDate = new Date(Date.UTC(2022, 4, 25));

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
        presets: []
    };
    optionOnlyDatePicker$ = new BehaviorSubject<DaterangeOptions>({
        calendarAmount: 1,
        presets: [],
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

        this.daterangeDatePicker.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            console.log('>>', value);
        });

        this.styleVersion$
            .pipe(
                takeUntil(this.onDestroy$),
                tap(() => {
                    this.styleUpdating$.next(true);
                }),
                delay(this.styleUpdatingDelay),
                tap(() => {
                    this.styleUpdating$.next(false);
                })
            )
            .subscribe(styleVersion => {
                this.rightMenu = [
                    {
                        title: this.rightMenu[0].title,
                        items:
                            styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3 ? rightMenuItems : rightMenuItems.slice(2)
                    },
                    this.rightMenu[1]
                ];
                // update formats by StyleVersion
                const dateFormat = styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3 ? 'd MMM, y' : 'd MMM y';
                this.optionOnlyDatePicker$.next({
                    calendarAmount: 1,
                    presets: [],
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
