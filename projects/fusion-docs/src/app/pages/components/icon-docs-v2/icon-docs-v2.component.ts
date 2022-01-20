import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ICON_NAMES} from './Icons-lib-config';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'fusion-icon-docs-v2',
    templateUrl: './icon-docs-v2.component.html',
    styleUrls: ['./icon-docs-v2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconDocsV2Component implements OnInit {
    @ViewChild('iconsActionHeader', {static: true}) iconsActionHeader: TemplateRef<any>;

    iconLibPrefix = 'v2/';

    iconNames$: Observable<string[]>;
    searchKey = new FormControl('');

    constructor(private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.iconNames$ = this.getIcons$();

        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Icons Lib',
            content: {templateRef: this.iconsActionHeader},
            type: 'page'
        });
    }

    onIconsDownload() {
        console.log('DOWNLOAD ICONS');
    }

    private getIcons$(): Observable<string[]> {
        const iconNames$ = of(ICON_NAMES); // possible from API service
        const search$ = this.searchKey.valueChanges.pipe(startWith(''), debounceTime(100), distinctUntilChanged());

        return combineLatest([iconNames$, search$]).pipe(
            map(([names, term]: [string[], string]) => {
                return term ? names.filter(name => name.trim().toLowerCase().indexOf(term.trim().toLowerCase()) > -1) : names;
            })
        );
    }
}
