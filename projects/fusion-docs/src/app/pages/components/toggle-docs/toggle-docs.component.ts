import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';
import {BehaviorSubject} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Component({
    selector: 'fusion-toggle-docs',
    templateUrl: './toggle-docs.component.html',
    styleUrls: ['./toggle-docs.component.scss']
})
export class ToggleDocsComponent implements OnInit {
    toggleFormControl = new FormControl(false);
    toggleSmallFormControl = new FormControl(false);

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

    constructor(private versionService: VersionService, private docLayoutService: DocsLayoutService) {}

    toggleLabel = 'Off';

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Types',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#tglBasic',
                    scrollOffset: 80
                }
            ]
        },
        {
            title: 'States',
            items: [
                {
                    label: 'Disabled',
                    scrollTo: '#tglDisabled',
                    scrollOffset: 80
                },
                {
                    label: 'Loading',
                    scrollTo: '#tglLoading',
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

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Toggle'
        });
    }

    onToggleChanged(toggleState: boolean): void {
        this.toggleFormControl.setValue(toggleState);
        this.toggleLabel = toggleState ? 'Live' : 'Off';
    }

    onToggleSmallChanged(toggleState: boolean): void {
        this.toggleSmallFormControl.setValue(toggleState);
    }
}
