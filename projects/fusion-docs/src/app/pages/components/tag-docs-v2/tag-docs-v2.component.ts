import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {
    StyleVersion,
    TagComponentConfigurations,
    TagRole,
    TagsInputClearSearchOn,
    TagsInputComponentConfigurations
} from '@ironsource/fusion-ui';
import {takeUntil} from 'rxjs/operators';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {FormControl} from '@angular/forms';
import {VersionService} from '../../../services/version/version.service';

@Component({
    selector: 'fusion-tag-docs-v2',
    templateUrl: './tag-docs-v2.component.html',
    styleUrls: ['./tag-docs-v2.component.scss']
})
export class TagDocsV2Component implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Default',
                    scrollTo: '#typeBasicDefault',
                    scrollOffset: 80
                },
                {
                    label: 'Input Tags',
                    scrollTo: '#typeInputTags',
                    scrollOffset: 80
                },
                {
                    label: 'Tag filter',
                    scrollTo: '#variationsTagFilter',
                    scrollOffset: 80
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

    predefinedTags: Array<string> = [
        'Art & Design',
        'Beauty',
        'Books & Reference',
        'Education',
        'Entertainment',
        'Events',
        'Finance',
        'Food & Drink',
        'Health & Fitness',
        'House & Home',
        'Libraries & Demo',
        'Lifestyle',
        'Maps & Navigation',
        'Medical',
        'Music & Audio',
        'News & Magazines',
        'Parenting'
    ];

    multiRawOptions = [
        {
            image: 'https://ui-demand.ssacdn.com/demand/img/appDefaultIcon.v2.png',
            id: 11479,
            displayText: '11479 Lost Toys',
            icon: 'ios',
            subText: {
                text: 'Barkingmice'
            }
        },
        {
            image: 'https://ui-demand.ssacdn.com/demand/img/appDefaultIcon.v2.png',
            id: 14238,
            displayText: '14238 Slots - Lost Treasures',
            icon: 'android',
            subText: {
                text: 'William Gelpi'
            }
        }
    ];

    tagsSelected = ['Art & Design', 'Beauty', 'Books & Reference'];

    tagsInputConfig: TagsInputComponentConfigurations = {
        tagList: this.predefinedTags,
        autoComplete: true,
        isPredefinedTags: true,
        inputPlaceholder: 'Add..',
        noResultMessage: 'No result'
    };

    tagsInputFooterConfig: TagsInputComponentConfigurations = {
        tagList: this.predefinedTags.map((item, idx) => ({id: idx + 1, title: item})),
        autoComplete: true,
        isPredefinedTags: true,
        inputPlaceholder: 'Add..',
        noResultMessage: 'No result',
        footer: {clearAll: 'Clear'},
        clearSearchOn: TagsInputClearSearchOn.Close,
        searchByProperties: ['title']
    };

    tagsFormControl = new FormControl(this.tagsSelected);
    tagsFormFooterControl = new FormControl();

    tagsFiltersMock: Array<TagComponentConfigurations> = [
        {
            id: 1,
            icon: {iconName: 'music', iconVersion: 'v1'},
            title: 'Music & Audio',
            role: TagRole.Filter
        },
        {
            id: 2,
            icon: {iconName: 'food', iconVersion: 'v1'},
            title: 'Food & Drink',
            role: TagRole.Filter
        },
        {
            id: 3,
            icon: {iconName: 'wallet', iconVersion: 'v1'},
            title: 'Finance',
            role: TagRole.Filter
        },
        {
            id: 4,
            icon: {iconName: 'education', iconVersion: 'v1'},
            title: 'Education',
            role: TagRole.Filter
        },
        {
            id: 5,
            icon: {iconName: 'map', iconVersion: 'v1'},
            title: 'Map & Navigation',
            role: TagRole.Filter,
            disabled: true
        }
    ];
    iconsFilters = this.tagsFiltersMock.map(item => {
        return {
            id: item.id,
            icon: item.icon
        };
    });
    tagsFilters = this.tagsFiltersMock.map(item => {
        delete item.icon;
        return item;
    });
    hasFilters = false;

    tagsInputDisabled$ = new BehaviorSubject<boolean>(false);

    constructor(private versionService: VersionService, private router: Router, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Tags'
        });

        this.hasFilters = !!this.tagsFilters.filter(item => item.selected).length;
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/tag']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onTagRemove($event): void {
        console.log('onTagRemove> ', $event);
    }

    onTagsChanged(tags): void {
        console.log('Page:onTagsChanged: ', tags);
    }

    filtered(id): boolean {
        return this.tagsFilters.filter(item => item.selected).some(item => item.id === id);
    }

    onTagToggle(option: any): void {
        this.tagsFilters.forEach(item => {
            if (item.id === option.id) {
                item.selected = option.selected;
            }
        });
        this.hasFilters = !!this.tagsFilters.filter(item => item.selected).length;
    }

    toggleDisabling($evt): void {
        this.tagsInputDisabled$.next(!this.tagsInputDisabled$.getValue());
    }
}
