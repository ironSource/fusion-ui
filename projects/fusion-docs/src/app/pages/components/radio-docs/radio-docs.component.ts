import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {IconSelectItem} from '@ironsource/fusion-ui/components/icon-select-list/common/base';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';
import {BehaviorSubject} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Component({
    selector: 'fusion-radio-docs',
    templateUrl: './radio-docs.component.html',
    styleUrls: ['./radio-docs.component.scss']
})
export class RadioDocsComponent implements OnInit {
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
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
                    label: 'HTML Content',
                    scrollTo: '#contentHTML',
                    scrollOffset: 15,
                    styleVersions: [1]
                },
                {
                    label: 'Including Icon',
                    scrollTo: '#contentIcon',
                    scrollOffset: 15,
                    styleVersions: [1]
                },
                {
                    label: 'Large Icon Above',
                    scrollTo: '#contentIconBig',
                    scrollOffset: 15,
                    styleVersions: [1]
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
                    scrollOffset: 15,
                    styleVersions: [1]
                },
                {
                    label: 'Error',
                    scrollTo: '#stateError',
                    scrollOffset: 0,
                    styleVersions: [1]
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

    model: any;
    rbGroupOptions: Array<any> = [
        {id: 1, label: 'Checked A', tooltip: 'Tooltip A'},
        {id: 2, label: 'Checked B', tooltip: 'Tooltip B'}
    ];
    formRadioButtons: FormGroup;
    input = new FormControl();
    radioFormControl = new FormControl(this.rbGroupOptions[0]);
    selectedRBOption: any = this.rbGroupOptions[0];

    rbGroupSecondOptions: Array<any> = [
        {id: 1, label: 'Checked A'},
        {id: 2, label: 'Checked B'}
    ];
    selectedRBSecondOption: any = this.rbGroupSecondOptions[0];

    rbGroupIconedOptions: Array<any> = [
        {id: 1, label: 'Checked A', icon: {iconName: 'ios', iconVersion: 'v1'}},
        {id: 2, label: 'Checked B', icon: {iconName: 'android', iconVersion: 'v1'}}
    ];
    selectedRBIconedOption: any = this.rbGroupIconedOptions[0];

    // Selectors with Icons Data Mock
    iconSelectDeviceTypeOptions: IconSelectItem[] = [
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
    iconSelectDeviceTypeSelected: IconSelectItem[] = [this.iconSelectDeviceTypeOptions[0]];

    iconSelectConnectionTypeOptions: IconSelectItem[] = [
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
    iconSelectConnectionTypeSelected: IconSelectItem[] = [this.iconSelectConnectionTypeOptions[1]];

    iconSelectConnectionTypeOptionsRequired: IconSelectItem[] = [
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

    error = 'Mandatory field';

    styleVersion = StyleVersion;
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

    constructor(private formBuilder: FormBuilder, private versionService: VersionService, private docLayoutService: DocsLayoutService) {}

    ngOnInit(): void {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Radio button'
        });

        this.formInit();
    }

    formInit(): void {
        this.formRadioButtons = this.formBuilder.group({
            iconSelectConnection: [[], [Validators.required]]
        });

        this.formRadioButtons.valueChanges.subscribe(selected => {
            console.log('Form Controls changes>', selected);

            this.error = selected.iconSelectConnection.length ? '' : 'Mandatory field';
        });
    }

    setSelected(val: any): void {
        console.log('>>', val);
    }

    onDeviceTypeSelectionChanged(selected: IconSelectItem[]): void {
        console.log('Selected', selected);
    }

    onConnectionTypeSelectionChanged(selected: IconSelectItem[]): void {
        console.log('Selected', selected);
    }
}
