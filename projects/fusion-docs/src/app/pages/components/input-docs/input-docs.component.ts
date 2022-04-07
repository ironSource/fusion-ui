import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {InputOptions, InputSize, StyleVersion, TooltipPosition} from '@ironsource/fusion-ui';
import {BehaviorSubject} from 'rxjs';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';

@Component({
    selector: 'fusion-input-docs',
    templateUrl: './input-docs.component.html',
    styleUrls: ['./input-docs.component.scss']
})
export class InputDocsComponent implements OnInit {
    model = new FormControl();
    modelDisabled = new FormControl();
    modelPass = new FormControl();
    modelPassConfirm = new FormControl();

    tooltipPosition = TooltipPosition;

    customInputForm = this.fb.group({
        applicationUrl: [
            null,
            [Validators.required, Validators.pattern(/^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]
        ]
    });

    /* eslint-disable max-len */
    textAreaVal =
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.';

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#inpTypeBasic',
                    scrollOffset: 30
                },
                {
                    label: 'Including Search',
                    scrollTo: '#inpTypeSearch',
                    scrollOffset: 15
                },
                {
                    label: 'Including Icon',
                    scrollTo: '#inpTypeIcon',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Variations',
            items: [
                {
                    label: 'Action',
                    scrollTo: '#inpVaraction',
                    scrollOffset: 30,
                    styleVersions: [1]
                },
                {
                    label: 'Action',
                    scrollTo: '#inpVarActionV2',
                    scrollOffset: 30,
                    styleVersions: [2]
                },
                {
                    label: 'Labeled',
                    scrollTo: '#inpVarLabeled',
                    scrollOffset: 15,
                    styleVersions: [1]
                },
                {
                    label: 'Spinner Number',
                    scrollTo: '#inpVarNumber',
                    scrollOffset: 15
                },
                {
                    label: 'Text Area',
                    scrollTo: '#inpTextArea',
                    scrollOffset: 15
                },
                {
                    label: 'Password',
                    scrollTo: '#inpPass',
                    scrollOffset: 15,
                    styleVersions: [2]
                }
            ]
        },
        {
            title: 'Size',
            items: [
                {
                    label: 'Regular and Small sizes',
                    scrollTo: '#inpSized',
                    scrollOffset: 30
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Errors & Warnings',
                    scrollTo: '#inpStatesErrors',
                    scrollOffset: 30
                },
                {
                    label: 'Loading',
                    scrollTo: '#inpStatesLoading',
                    scrollOffset: 0,
                    styleVersions: [1, 2]
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

    // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match
    inputOptionsTest_options: any;

    actionMessageShown = false;

    inputSize = InputSize;

    numberVal = new FormControl(1);
    tableInput = new FormControl(150.0);
    errorWithIconInput = new FormControl(51.0);
    nameInput = new FormControl('David Choen');

    actionButtonLoading$ = new BehaviorSubject(false);

    styleVersion = StyleVersion;
    selectedVersion$ = this.versionService.styleVersion$;

    passwordOptions: InputOptions = {};
    confirmPasswordOptions: InputOptions = {};

    constructor(private fb: FormBuilder, private versionService: VersionService, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Input'
        });

        // set mocking
        this.inputOptionsTest_options = {
            size: 'small'
        };

        this.modelDisabled.setValue('Some value in disabled input');

        this.customInputForm.statusChanges.subscribe(status => {
            console.log('status', status);
        });
    }

    onPassStateChanged(isPassHidden) {
        this.passwordOptions = {isPassHidden};
        this.confirmPasswordOptions = {isPassHidden};
    }

    onPassConfirmStateChanged(isPassHidden) {
        this.confirmPasswordOptions = {isPassHidden};
        this.passwordOptions = {isPassHidden};
    }

    alertMe($event) {
        console.log('Search Action Clicked!');

        this.actionButtonLoading$.next(true);
        setTimeout(() => {
            this.actionButtonLoading$.next(false);
            // show action
            this.actionMessageShown = true;
            setTimeout(() => (this.actionMessageShown = false), 5000);
        }, 5000);
    }
}
