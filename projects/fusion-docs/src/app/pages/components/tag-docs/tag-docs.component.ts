import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ApiService, ApiResponseType, VersionService, StyleVersion, Tag} from '@ironsource/fusion-ui';
import {map, delay, takeUntil} from 'rxjs/operators';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
    selector: 'fusion-tag-docs',
    templateUrl: './tag-docs.component.html',
    styleUrls: ['./tag-docs.component.scss']
})
export class TagDocsComponent implements OnInit, OnDestroy {
    appTags = ['Social Gambling', 'Gambling', 'Dating', 'Game Mobile App Install', 'Inappropriate content'];
    selectedAppTags = ['Social Gambling', 'Gambling', 'Dating', 'Game Mobile App Install', 'Inappropriate content'];

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

    curr = {id: 1, companyName: 'IS', userId: 123};
    tagsObj: Array<any> = [
        {
            id: 1,
            title: 'Art & Design',
            icon: {iconName: 'education', iconVersion: 'v1'},
            tooltip: "<div style='color: blue'>Art & Design</div>"
        },
        {id: 2, title: 'Beauty', icon: {iconName: 'education', iconVersion: 'v1'}, tooltip: 'Beauty'},
        {
            id: 3,
            title: 'Books & Reference',
            icon: {iconName: 'education', iconVersion: 'v1'},
            tooltip: `Application ID: ${this.curr.id}<hr style="border-top: 1px; background-color: rgba(255, 255, 255, 0.2); margin: 5px 0">Publisher: ${this.curr.companyName} (${this.curr.userId})`
        },
        {id: 4, title: 'Education', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 5, title: 'Entertainment', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 6, title: 'Events', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 7, title: 'Finance', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 8, title: 'Food & Drink', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 9, title: 'Health & Fitness', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 10, title: 'House & Home', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 11, title: 'Libraries & Demo', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 12, title: 'Lifestyle', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 13, title: 'Maps & Navigation', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 14, title: 'Medical', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 15, title: 'Music & Audio', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 16, title: 'News & Magazines', icon: {iconName: 'education', iconVersion: 'v1'}},
        {id: 817, title: 'Parenting', icon: {iconName: 'education', iconVersion: 'v1'}}
    ];

    tagsSelected: Array<string> = ['Art & Design', 'Beauty', 'Books & Reference'];

    formTagsPage: FormGroup;
    errorMessage = 'Mandatory field';

    tagsOptions: Array<any>;
    inSearch = false;

    tagsWithFlags: Array<any> = [
        {
            id: 1,
            flag: 'de',
            title: 'Germany',
            displayText: 'Germany'
        },
        {
            id: 2,
            flag: 'fr',
            title: 'France',
            displayText: 'France'
        },
        {
            id: 3,
            flag: 'gb',
            title: 'United Kingdom',
            displayText: 'United Kingdom'
        },
        {
            id: 4,
            flag: 'ua',
            title: 'Ukraine',
            displayText: 'Ukraine'
        }
    ];
    selectedCountries: Array<any> = [...this.tagsWithFlags];

    tagsFilters: Array<any> = [
        {
            id: 1,
            icon: {iconName: 'music', iconVersion: 'v1'},
            title: 'Music & Audio'
        },
        {
            id: 2,
            icon: {iconName: 'food', iconVersion: 'v1'},
            title: 'Food & Drink'
        },
        {
            id: 3,
            icon: {iconName: 'wallet', iconVersion: 'v1'},
            title: 'Finance'
        },
        {
            id: 4,
            icon: {iconName: 'education', iconVersion: 'v1'},
            title: 'Education'
        },
        {
            id: 5,
            icon: {iconName: 'map', iconVersion: 'v1'},
            title: 'Map & Navigation'
        }
    ].map(item => Object.assign(item, {selected: false}));
    hasFilters = this.tagsFilters.some(item => item.selected);

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Types',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                },
                {
                    label: 'Create New Tag',
                    scrollTo: '#typeCreateNew',
                    scrollOffset: 15
                },
                {
                    label: 'Hidden List',
                    scrollTo: '#typeAutocomplete',
                    scrollOffset: 15
                },
                {
                    label: 'Bulk Insert',
                    scrollTo: '#typeBulkInsert',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Variations',
            items: [
                {
                    label: 'Multiple Selection Dropdown',
                    scrollTo: '#variationsMSP',
                    scrollOffset: 15
                },
                {
                    label: 'Tag Filter',
                    scrollTo: '#variationsTagFilter',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Content',
            items: [
                {
                    label: 'Including Icon',
                    scrollTo: '#contentIcon',
                    scrollOffset: 15
                },
                {
                    label: 'Tooltip (long tag name)',
                    scrollTo: '#contentTooltip',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'State',
            items: [
                {
                    label: 'Disabled',
                    scrollTo: '#stateDisabled',
                    scrollOffset: 0
                },
                {
                    label: 'Error',
                    scrollTo: '#stateError',
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

    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    tagsInputDisabled$ = new BehaviorSubject<boolean>(false);

    bulkInsertedTags = new FormControl([]);

    constructor(
        private apiService: ApiService,
        private formBuilder: FormBuilder,
        private versionService: VersionService,
        private router: Router
    ) {}

    ngOnInit() {
        this.initForm();
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V2) {
                this.router.navigate(['docs/components/v2/tag']);
            }
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    initForm() {
        this.formTagsPage = this.formBuilder.group({
            requiredTags: [[], [Validators.required]]
        });

        this.formTagsPage.valueChanges.subscribe(val => {
            console.log('Form Controls changes>', val);

            this.errorMessage = val.requiredTags.length ? '' : 'Mandatory field';
        });
    }

    onChange(isSelected) {
        console.log(`now it\'s ${isSelected ? '' : 'un'}selected`);
    }

    onRemove(tag) {
        console.log('element has been removed', tag);
    }

    onCountryRemove(tag) {
        console.log('country to remove:', tag);
        this.selectedCountries = this.selectedCountries.filter(item => item.id !== tag.id);
    }

    onSelectedCountryChanged(selected: Array<any>): void {
        this.selectedCountries = [...selected];
    }

    onTagToggle(option: any): void {
        this.tagsFilters.forEach(item => {
            if (item.id === option.id) {
                item.selected = option.selected;
            }
        });
        this.hasFilters = this.tagsFilters.some(item => item.selected);
    }

    // Tags input --------
    onTagsChanged(tags): void {
        console.log('Page:onTagsChanged: ', tags);
    }

    onTagsSearch(searchValue): void {
        // console.log('TagsInput Auto-Complete for: ', searchValue);
        this.tagsOptions = [];
        if (searchValue.length === 0) {
            return;
        }
        this.inSearch = true;
        this.apiService
            .get('https://jsonplaceholder.typicode.com/comments', {
                responseType: ApiResponseType.Json
            })
            .pipe(
                map((data: any[]) => {
                    return data
                        .filter(item => {
                            return item.email.indexOf(searchValue) !== -1;
                        })
                        .map(item => {
                            return {id: item.id, title: item.email};
                        });
                }),
                delay(1000)
            )

            .subscribe(
                data => {
                    this.inSearch = false;
                    this.tagsOptions = data;
                },
                error => {
                    console.error(error);
                    this.inSearch = false;
                }
            );
    }

    onBulkInsert(value: string[]) {
        this.inSearch = true;
        this.apiService
            .get('https://jsonplaceholder.typicode.com/comments', {
                responseType: ApiResponseType.Json
            })
            .pipe(
                map((data: any[]) => {
                    return data
                        .filter(item => {
                            return value.includes(item.id.toString());
                        })
                        .map(item => {
                            return {id: item.id, title: item.email};
                        });
                }),
                delay(1000)
            )

            .subscribe(
                data => {
                    this.inSearch = false;
                    console.log('ret: ', data);
                    if (Array.isArray(data)) {
                        const selectedTags: Tag[] = this.bulkInsertedTags.value;
                        this.bulkInsertedTags.setValue([
                            ...selectedTags,
                            ...data.filter((item: Tag) => {
                                return !selectedTags.some(tag => tag.id === item.id);
                            })
                        ]);
                    }
                },
                error => {
                    console.error(error);
                    this.inSearch = false;
                }
            );
    }

    onBulkTagsChanged(tags): void {
        this.bulkInsertedTags.setValue(tags);
    }

    addCustomTag(newTag: string) {
        console.log('Add new tag: ', newTag);
    }

    onApplicationTagsChanged(tag: any) {
        console.log('>>>>>', tag);
    }

    toggleDisabling($evt): void {
        this.tagsInputDisabled$.next(!this.tagsInputDisabled$.getValue());
    }
}
