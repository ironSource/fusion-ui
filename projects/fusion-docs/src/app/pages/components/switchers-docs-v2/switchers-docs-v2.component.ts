import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {SwitcherItem} from '@ironsource/fusion-ui/components/switcher/common/entities';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {FormControl, Validators} from '@angular/forms';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';

@Component({
    selector: 'fusion-switchers-docs-v2',
    templateUrl: './switchers-docs-v2.component.html',
    styleUrls: ['./switchers-docs-v2.component.scss'],
    standalone: false
})
export class SwitchersDocsV2Component implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Types',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#switcherBasic',
                    scrollOffset: 80
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Disabled Option',
                    scrollTo: '#switcherDisabledItem',
                    scrollOffset: 0
                } /*,
                {
                    label: 'Validation Error',
                    scrollTo: '#switcherErrorItem',
                    scrollOffset: 0
                }*/
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

    switcherOptions: SwitcherItem[] = [
        {id: '1', title: 'Cardiff'},
        {id: '2', title: 'Halifax'},
        {id: '3', title: 'Tel-Aviv'}
    ];
    switcherBasic = new FormControl(this.switcherOptions[0]);

    switcherOptions2: SwitcherItem[] = [
        {id: '1', title: 'Cardiff'},
        {id: '3', title: 'Tel-Aviv'}
    ];
    switcherBasic2 = new FormControl(this.switcherOptions[0]);

    switcherOptions4: SwitcherItem[] = [
        {id: '1', title: 'Cardiff'},
        {id: '2', title: 'Halifax'},
        {id: '3', title: 'Springfield'},
        {id: '4', title: 'Tel-Aviv'}
    ];
    switcherBasic4 = new FormControl(this.switcherOptions[0]);

    switcherOptionsDisabled: SwitcherItem[] = [
        {id: '1', title: 'Cardiff', disabled: true},
        {id: '2', title: 'Halifax'},
        {id: '3', title: 'Tel-Aviv'}
    ];
    switcherBasicDisabled = new FormControl(this.switcherOptionsDisabled[1]);

    switcherError = new FormControl(null, [Validators.required]);

    constructor(private versionService: VersionService, private router: Router, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Switchers'
        });
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/switchers']);
            }
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    getSwitcherError() {
        if (this.switcherError.invalid) {
            return 'This is a mandatory field';
        }
    }
}
