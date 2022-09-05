import {Component, OnDestroy, OnInit, Type, ViewChild} from '@angular/core';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {
    MOCK_AUTOCOMPLETE_DATA,
    MOCK_OPTIONS,
    MOCK_OPTIONS_GROUPED,
    TOP_COUNTRIES,
    MOCK_OPTIONS_COUNTRIES,
    MOK_APPLICATIONS,
    MOCK_OPTIONS_V2
} from './dropdown-docs-v2.config';
import {catchError, delay, takeUntil} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs';
import {OPTIONS_GROUPED_SUBGROUP} from '../dropdown-docs/dropdown-docs.config';
import {Router} from '@angular/router';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {DropdownCustomPlaceholderComponent} from '../../../components/dropdown-custom-placeholder/dropdown-custom-placeholder.component';
import {VersionService} from '../../../services/version/version.service';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {BackendPagination, DropdownComponent} from '@ironsource/fusion-ui/components/dropdown/v2';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {ClosedOptions} from '@ironsource/fusion-ui/components/dropdown/entities';

@Component({
    selector: 'fusion-dropdown-docs-v2',
    templateUrl: './dropdown-docs-v2.component.html',
    styleUrls: ['./dropdown-docs-v2.component.scss']
})
export class DropdownDocsV2Component implements OnInit, OnDestroy {
    @ViewChild('dropdownCustomComponent') dropdownCustomComponent: DropdownComponent;
    rightMenu: DocsMenuItem[] = [
        {
            title: 'Single Selection',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#ddSingleBasic',
                    scrollOffset: 80
                },
                {
                    label: 'Including Search',
                    scrollTo: '#ddSingleSearch',
                    scrollOffset: 15
                },
                {
                    label: 'Grouped Options',
                    scrollTo: '#ddGrouped',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Multiple Selection',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#ddMultiBasic',
                    scrollOffset: 15
                },
                {
                    label: 'Including Search',
                    scrollTo: '#ddMultiSearch',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Variations',
            items: [
                {
                    label: 'Variations',
                    scrollTo: '#ddVariations',
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

    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    formDropDowns: FormGroup;

    isDropdownOpen: boolean;
    loading: boolean;

    dropdownControl = new FormControl();
    dropdownControlClientSearch = new FormControl();
    dropdownDisabledControl = new FormControl();
    dropdownControlAppSearch = new FormControl();
    multiSelectedControl = new FormControl();
    multiSelectedCountriesControl = new FormControl();
    multiSelectedControlNoConfirm = new FormControl();
    multiSelectedSearchControl = new FormControl();
    multiSelectedAppsSearchControl = new FormControl();
    multiSelectedCountriesSearchControl = new FormControl();

    options: DropdownOption[] = MOCK_OPTIONS_V2;
    optionsNoIcons: DropdownOption[];
    optionsAutoComplete = [];
    countriesOptions: DropdownOption[] = MOCK_OPTIONS_COUNTRIES;
    groupedOptions: DropdownOption[] = MOCK_OPTIONS_GROUPED;
    groupedCountriesOptions: DropdownOption[] = ((allCountries: any[]): DropdownOption[] => {
        const groupedCountries = [
            {
                id: 'topCountries',
                displayText: 'Top Countries',
                isGroup: true,
                childOptions: []
            },
            {
                id: 'restCountries',
                displayText: 'Rest of the world',
                isGroup: true,
                childOptions: []
            }
        ];
        allCountries.forEach(country => {
            groupedCountries[TOP_COUNTRIES.includes(country.id) ? 0 : 1].childOptions.push(country);
        });
        return groupedCountries;
    })(MOCK_OPTIONS_COUNTRIES);
    groupedSubGroupOptions: DropdownOption[] = OPTIONS_GROUPED_SUBGROUP;
    applicationList: DropdownOption[] = MOK_APPLICATIONS.map(app => {
        return {
            id: app.id,
            name: app.name,
            displayText: app.name,
            icon: app.platform.toLowerCase(),
            image: app.icon
        };
    });

    customDynamicComponent: DynamicComponentConfiguration = {
        component: {
            type: DropdownCustomPlaceholderComponent as Type<Component>,
            data: {
                text: 'Custom placeholder',
                isOpen: false,
                isSelected: false
            }
        }
    };

    // ----
    dropdownPaginationOptions: BackendPagination;
    private backendPaginationOptions = this.getBackendPaginationOptions();
    // ----

    constructor(
        private formBuilder: FormBuilder,
        private versionService: VersionService,
        private router: Router,
        private docLayoutService: DocsLayoutService
    ) {}

    ngOnInit() {
        this.docLayoutService.updateLayoutHeaderTitle({
            text: 'Dropdown'
        });

        this.optionsNoIcons = this.options /*.slice(0,4)*/
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(item => {
                return {...item, ...{displayText: item.title}};
            });

        this.formDropDowns = this.formBuilder.group({
            dropdownRequired: [null, [Validators.required]],
            subGroupDropDown: [[]],
            subGroupMultiDropDown: [
                [
                    /*{"id":"ad_revenue_1d","displayText":"D1","titleText":"D1 Ad Revenue","checked":true,"isSelected":true},{"id":"ad_revenue_3d","displayText":"D3","titleText":"D3 Ad Revenue","checked":true,"isSelected":true},{"id":"ad_revenue_7d","displayText":"D7","titleText":"D7 Ad Revenue","checked":true,"isSelected":true},{"id":"ad_revenue_14d","displayText":"D14","titleText":"D14 Ad Revenue","checked":true,"isSelected":true},{"id":"ad_revenue_30d","displayText":"D30","titleText":"D30 Ad Revenue","checked":true,"isSelected":true},{"id":"iap_revenue_1d","displayText":"D1","titleText":"D1 IAP Revenue","checked":true,"isSelected":true},{"id":"iap_revenue_3d","displayText":"D3","titleText":"D3 IAP Revenue","checked":true,"isSelected":true},{"id":"iap_revenue_7d","displayText":"D7","titleText":"D7 IAP Revenue","checked":true,"isSelected":true},{"id":"iap_revenue_14d","displayText":"D14","titleText":"D14 IAP Revenue","checked":true,"isSelected":true},{"id":"iap_revenue_30d","displayText":"D30","titleText":"D30 IAP Revenue","checked":true,"isSelected":true},{"id":"total_revenue_1d","displayText":"D1","titleText":"D1 Total Revenue","checked":true,"isSelected":true},{"id":"total_revenue_3d","displayText":"D3","titleText":"D3 Total Revenue","checked":true,"isSelected":true},{"id":"total_revenue_7d","displayText":"D7","titleText":"D7 Total Revenue","checked":true,"isSelected":true},{"id":"total_revenue_14d","displayText":"D14","titleText":"D14 Total Revenue","checked":true,"isSelected":true},{"id":"total_revenue_30d","displayText":"D30","titleText":"D30 Total Revenue","checked":true,"isSelected":true},{"id":"roas_1d","displayText":"D1","titleText":"D1 ROAS","checked":true,"isSelected":true},{"id":"roas_3d","displayText":"D3","titleText":"D3 ROAS","checked":true,"isSelected":true},{"id":"roas_7d","displayText":"D7","titleText":"D7 ROAS","checked":true,"isSelected":true},{"id":"roas_14d","displayText":"D14","titleText":"D14 ROAS","checked":true,"isSelected":true},{"id":"roas_30d","displayText":"D30","titleText":"D30 ROAS","checked":true,"isSelected":true},{"id":"retention_1d","displayText":"D1","titleText":"D1 Retention","checked":true,"isSelected":true},{"id":"retention_3d","displayText":"D3","titleText":"D3 Retention","checked":true,"isSelected":true},{"id":"retention_7d","displayText":"D7","titleText":"D7 Retention","checked":true,"isSelected":true},{"id":"retention_14d","displayText":"D14","titleText":"D14 Retention","checked":true,"isSelected":true},{"id":"retention_30d","displayText":"D30","titleText":"D30 Retention","checked":true,"isSelected":true}*/
                ]
            ]
        });

        /*
        this.formDropDowns.valueChanges.subscribe(val=>{
            console.log('values', JSON.stringify(val.subGroupMultiDropDown));
        })
*/

        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/dropdown']);
            }
        });

        // update custom placeholder data
        this.dropdownControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.customDynamicComponent = {
                ...this.customDynamicComponent,
                component: {
                    type: DropdownCustomPlaceholderComponent as Type<Component>,
                    data: {text: value[0].displayText}
                }
            };
        });

        this.setBackendPaginationOptions(null);
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onSearchChange(newSearchValue) {
        this.optionsAutoComplete = [];
        this.loading = true;
        this.getData()
            .pipe(delay(3000))
            .subscribe(
                data => {
                    this.optionsAutoComplete = data.filter(item => item.name.indexOf(newSearchValue.toLowerCase()) !== -1);
                },
                error => {
                    console.error(error);
                },
                () => {
                    this.loading = false;
                }
            );
    }

    getData(): Observable<any[]> {
        const mockData = MOCK_AUTOCOMPLETE_DATA;
        return of(mockData);
    }

    onClose(options: ClosedOptions) {
        console.log(options);
    }

    onSearchTermChanged(searchTerm) {
        if (searchTerm?.length > 2) {
            console.log('onCampaignSearchTermChanged >>>', searchTerm);
            this.setBackendPaginationOptions(searchTerm);
        }
    }

    onSearchClear() {
        console.log('onCampaignSearchClear');
        this.setBackendPaginationOptions(null);
    }

    private setBackendPaginationOptions(term: string): void {
        const getOptions = {
            searchTerm: term || null,
            pageNumber: 1,
            resultsBulkSize: 15
        };
        const backendGetFunction = this.getPaginationData;
        const backendPagination = {
            backendGetFunction,
            getOptions,
            ...this.backendPaginationOptions
        };
        this.dropdownPaginationOptions = backendPagination;
    }

    private getPaginationData({searchTerm, pageNumber, resultsBulkSize}): Observable<{items: any[]; totals: number}> {
        console.log('getPaginationData >>', searchTerm, pageNumber, resultsBulkSize);

        const page = {
            start: (pageNumber - 1) * resultsBulkSize,
            end: (pageNumber - 1) * resultsBulkSize + resultsBulkSize - 1
        };
        console.log(':', page);

        const allData = !!searchTerm
            ? MOCK_AUTOCOMPLETE_DATA.filter(item => {
                  return item.email.includes(searchTerm);
              })
            : MOCK_AUTOCOMPLETE_DATA;
        console.log('>>', searchTerm, allData);

        const mockData = allData.slice(page.start, page.end);
        console.log(mockData.length, allData.length);

        return of({items: mockData, totals: allData.length}).pipe(delay(2000));
    }

    private getBackendPaginationOptions() {
        return {
            responseDataPropertyName: 'items',
            responseTotalCountPropertyName: 'totals',
            mappingFunction: item => ({
                id: item.id,
                displayText: item.email
            }),
            sortingFunction: (a, b) => a.id - b.id
        };
    }
}
