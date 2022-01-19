import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {StyleVersion, SwitcherItem, SwitcherMode, VersionService} from '@ironsource/fusion-uifusion-ui';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-switchers-docs',
    templateUrl: './switchers-docs.component.html',
    styleUrls: ['./switchers-docs.component.scss']
})
export class SwitchersDocsComponent implements OnInit, OnDestroy {
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
                },
                {
                    label: 'Square',
                    scrollTo: '#switcherSquare',
                    scrollOffset: 0
                },
                {
                    label: 'Multiple Options',
                    scrollTo: '#switcherMultiple',
                    scrollOffset: 0
                }
            ]
        },
        {
            title: 'Sizes',
            items: [
                {
                    label: 'Minimum Width',
                    scrollTo: '#switcherMinWidth',
                    scrollOffset: 0
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
                },
                {
                    label: 'Validation Error',
                    scrollTo: '#switcherErrorItem',
                    scrollOffset: 0
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

    switcherOptions: SwitcherItem[] = [
        {id: 1, title: 'Non Incent'},
        {id: 2, title: 'Incent'}
    ];
    switcherOptions2: SwitcherItem[] = [
        {id: '1', title: 'One'},
        {id: '2', title: 'Two'},
        {id: '3', title: 'Three'}
    ];
    switcherOptions3: SwitcherItem[] = [
        {id: 'table', title: 'Table'},
        {id: 'graph', title: 'Graph'}
    ];
    switcherOptions4: SwitcherItem[] = [
        {id: '1', title: 'One'},
        {id: '2', title: 'Two'},
        {
            id: '3',
            title: 'Three',
            disabled: true
        }
    ];

    squareMode: SwitcherMode.Square;

    switcherBasic = new FormControl(this.switcherOptions[0]);
    switcherMultiple = new FormControl(this.switcherOptions2[1]);
    switcherMin = new FormControl(this.switcherOptions3[0]);
    switcherDisabled = new FormControl(this.switcherOptions4[0]);

    switcherError1 = new FormControl(null, [Validators.required]);
    switcherError2 = new FormControl(null, [Validators.required]);

    constructor(private versionService: VersionService, private router: Router) {}

    ngOnInit() {
        this.switcherError1.markAsDirty();
        this.switcherError2.markAsDirty();

        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['docs/components/v2/switchers']);
            }
        });
    }

    getSwitcherError1() {
        if (this.switcherError1.invalid && this.switcherError1.dirty) {
            return 'This is a mandatory field';
        }
    }

    getSwitcherError2() {
        if (this.switcherError2.invalid && this.switcherError2.dirty) {
            return 'This is a mandatory field';
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
