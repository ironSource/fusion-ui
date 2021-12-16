import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ListBoxModes, ListBoxOption, StyleVersion, VersionService} from '@ironsrc/fusion-ui';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';

/* eslint-disable max-len */
const MOCK_DATA_1 = [
    {id: 1, displayText: 'CPI Campaign US App'},
    {id: 2, displayText: 'Playable Cool Campaign for App2'},
    {id: 3, displayText: '360 awesome Campaign for App3'},
    {id: 4, displayText: 'CPV Campaign GB for App4'},
    {id: 5, displayText: 'CPV Campaign GB for App5'},
    {id: 6, displayText: 'CPV Campaign GB for App6'},
    {id: 7, displayText: 'CPV Campaign GB for App7'},
    {
        id: 7,
        displayText:
            'Very very very long name, it is a very very very very long name, I am a long name, yay, very very very long name, ' +
            'it is a very very very very long name, I am a long name, yay, very very very long name, it is a very very very very long name, I am a ' +
            'long name, yay'
    }
];
const MOCK_DATA_2 = MOCK_DATA_1.slice(0);
const MOCK_DATA_3 = [
    {appKey: 1, name: 'My App'},
    {appKey: 2, name: 'My App2'},
    {appKey: 3, name: 'My App3'},
    {appKey: 4, name: 'My App4'}
];
const MOCK_DATA_4 = [
    {id: 1, displayText: 'Option 1'},
    {id: 2, displayText: 'Option 2'},
    {id: 3, displayText: 'Option 3'},
    {id: 4, displayText: 'Option 4'},
    {id: 5, displayText: 'Option 5'}
];

@Component({
    selector: 'fusion-list-box-docs',
    templateUrl: './list-box-docs.component.html',
    styleUrls: ['./list-box-docs.component.scss']
})
export class ListBoxDocsComponent implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'List Box',
            items: [
                {
                    label: 'Regular',
                    scrollTo: '#typeRegular',
                    scrollOffset: 30
                },
                {
                    label: 'In Frame',
                    scrollTo: '#typeFrame',
                    scrollOffset: 30
                },
                {
                    label: 'Disabled',
                    scrollTo: '#typeDisabled',
                    scrollOffset: 30
                },
                {
                    label: 'With Dropdown',
                    scrollTo: '#typeDropdown',
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

    campaignList = new FormControl(MOCK_DATA_1);

    framedList = new FormControl(MOCK_DATA_2);
    frameMode = ListBoxModes.Frame;

    disabledList = new FormControl({
        value: MOCK_DATA_3,
        disabled: true
    });
    dropdownOptions = MOCK_DATA_4;

    dropdownList = new FormControl();
    listBoxList = new FormControl();

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit() {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['docs/components/v2/list-box']);
            }
        });
        this.dropdownList.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.listBoxList.setValue([...value], {emitEvent: false});
        });
        this.listBoxList.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.dropdownList.setValue([...value]);
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
