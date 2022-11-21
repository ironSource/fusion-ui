import {Component, OnInit} from '@angular/core';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';
import {BehaviorSubject} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {TabConfiguration} from '@ironsource/fusion-ui/components/tabs/v2';

@Component({
    selector: 'fusion-button-docs',
    templateUrl: './button-docs.component.html',
    styleUrls: ['./button-docs.component.scss']
})
export class ButtonDocsComponent implements OnInit {
    model: any;

    rightMenu: DocsMenuItem[] = [
        {
            title: 'State',
            items: [
                {
                    label: 'Default',
                    scrollTo: '#typeDefault',
                    scrollOffset: 30
                },
                {
                    label: 'Disable',
                    scrollTo: '#typeDisabled'
                },
                {
                    label: 'Loading',
                    scrollTo: '#typeLoading'
                }
            ]
        },
        {
            title: 'Variations',
            items: [
                {
                    label: 'Sizes',
                    scrollTo: '#typeSizes'
                },
                {
                    label: 'Themes',
                    scrollTo: '#typeThemes'
                },
                {
                    label: 'Variants',
                    scrollTo: '#typeVariants'
                }
            ]
        }
    ];

    /*
    buttonIcon = 'activate';
    isLoading = false;
*/

    /*
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
*/

    button_label = 'Button';

    pageTabs = {tabs: [{text: 'Variations'}, {text: 'Playground'}], tabWidth: 200};
    selectedTab: TabConfiguration = this.pageTabs.tabs[0];

    constructor(/*private versionService: VersionService, */ private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Button'
        });
    }

    /*
    onTestClick() {
        this.buttonIcon = null;
        this.isLoading = true;
        setTimeout(_ => {
            this.isLoading = false;
            this.buttonIcon = 'check-v-2';
        }, 2000);
    }

    onClick($event?) {
        if ($event) {
            $event.preventDefault();
        }
        console.log('Click');
        this.isLoading = true;
        setTimeout(_ => {
            this.isLoading = false;
        }, 2000);
    }
*/
}
