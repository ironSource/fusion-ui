import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IconSelectItem, StyleVersion, VersionService} from '@ironsrc/fusion-ui';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';

@Component({
    selector: 'fusion-checkbox-docs',
    templateUrl: './checkbox-docs.component.html',
    styleUrls: ['./checkbox-docs.component.scss']
})
export class CheckboxDocsComponent implements OnInit, OnDestroy {
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
                    label: 'Horizontal',
                    scrollTo: '#typeHorizontal',
                    scrollOffset: 80
                },
                {
                    label: 'Vertical',
                    scrollTo: '#typeVertical',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Content',
            items: [
                {
                    label: 'Including Flags',
                    scrollTo: '#contentIcon',
                    scrollOffset: 15,
                    styleVersions: [1]
                },
                {
                    label: 'Large Icon Above',
                    scrollTo: '#contentIconBig',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Disabled',
                    scrollTo: '#stateDisabled',
                    scrollOffset: 15
                },
                {
                    label: 'Disabled Large Icon',
                    scrollTo: '#stateDisabledIconBig',
                    scrollOffset: 15
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

    onDestroy$ = new Subject();
    // model: any;

    formCheckBoxes: FormGroup;
    checkboxControl = new FormControl(true);
    firstCheckbox = new FormControl(true);
    secondCheckbox = new FormControl();

    // Multi-Selectors with Icons Data Mock
    iconMultiSelectDeviceTypeOptions: Array<IconSelectItem> = [
        {
            id: 'phone',
            icon: {iconName: 'circle-phone', iconVersion: 'v1'},
            label: 'Phone'
        },
        {
            id: 'tablet',
            icon: {iconName: 'circle-tablet', iconVersion: 'v1'},
            label: 'Tablet'
        }
    ];
    iconMultiSelectDeviceTypeSelected: Array<IconSelectItem> = [
        {
            id: 'tablet',
            icon: {iconName: 'circle-tablet', iconVersion: 'v1'},
            label: 'Tablet'
        }
    ];

    iconMultiSelectConnectionTypeOptions: Array<IconSelectItem> = [
        {
            id: 'wifi',
            icon: {iconName: 'circle-wifi', iconVersion: 'v1'},
            label: 'WiFi',
            disabled: true
        },
        {
            id: '3g',
            icon: {iconName: 'circle-3g', iconVersion: 'v1'},
            label: '3G'
        },
        {
            id: '4g',
            icon: {iconName: 'circle-4g', iconVersion: 'v1'},
            label: '4G'
        }
    ];

    iconMultiSelectConnectionTypeSelected: Array<IconSelectItem> = [
        this.iconMultiSelectConnectionTypeOptions[1],
        this.iconMultiSelectConnectionTypeOptions[2]
    ];

    iconMultiSelectConnectionTypeOptionsTwo: Array<IconSelectItem> = [
        {
            id: 'wifi',
            icon: {iconName: 'circle-wifi', iconVersion: 'v1'},
            label: 'WiFi',
            disabled: true
        },
        {
            id: '3g',
            icon: {iconName: 'circle-3g', iconVersion: 'v1'},
            label: '3G'
        },
        {
            id: '4g',
            icon: {iconName: 'circle-4g', iconVersion: 'v1'},
            label: '4G'
        }
    ];
    iconMultiSelectConnectionTypeTwoSelected: Array<IconSelectItem> = [];

    error = 'Mandatory field';

    styleVersion = StyleVersion;
    selectedVersion$ = this.versionService.styleVersion$;

    constructor(private _formBuilder: FormBuilder, private versionService: VersionService, private docLayoutService: DocsLayoutService) {}

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngOnInit(): void {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Checkbox'
        });

        this.formInit();
    }

    formInit(): void {
        this.formCheckBoxes = this._formBuilder.group({
            firstFormControlElement: false,
            secondFormControlElement: true,
            iconMultiSelectConnection: [this.iconMultiSelectConnectionTypeTwoSelected, [Validators.required]]
        });

        this.formCheckBoxes.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
            console.log('Form Controls changes to: ', val);

            this.error = val.iconMultiSelectConnection.length ? '' : 'Mandatory field';
        });

        this.firstCheckbox.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => console.log(val));

        this.secondCheckbox.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => console.log(val));
    }

    onDeviceTypeSelectionChanged(selected: IconSelectItem[]): void {
        console.log('Selected', selected);
    }

    onConnectionTypeSelectionChanged(selected: IconSelectItem[]): void {
        console.log('Selected', selected);
    }
}
