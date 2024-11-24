import {Component, OnDestroy, OnInit, Type} from '@angular/core';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {DropdownCustomPlaceholderComponent} from '../../../components/dropdown-custom-placeholder/dropdown-custom-placeholder.component';
import {
    dynamicDisplayItemBackendPagination,
    MOCK_DUAL_OPTIONS,
    MOCK_DUAL_OPTIONS_DISABLE_All_ITEMS,
    MOCK_DUAL_OPTIONS_DISABLED,
    MOCK_DUAL_OPTIONS_DYNAMIC,
    MOCK_DUAL_OPTIONS_PRESET,
    MOCK_DUAL_OPTIONS_PRESET_DISABLED,
    MOCK_DUAL_OPTIOS_PAGINATION
} from './dropdown-dual-multi-select-config';
import {FormControl} from '@angular/forms';
import {Observable, of, Subject} from 'rxjs';
import {delay, takeUntil} from 'rxjs/operators';
import {MOK_APPLICATIONS} from '../dropdown-docs-v2/dropdown-docs-v2.config';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {BackendPagination} from '@ironsource/fusion-ui/components/dropdown';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-docs',
    templateUrl: './dropdown-dual-multi-select-docs.component.html',
    styleUrls: ['./dropdown-dual-multi-select-docs.component.scss'],
    standalone: false
})
export class DropdownDualMultiSelectDocsComponent implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();

    placeholderData: DynamicComponentConfiguration;
    items = MOCK_DUAL_OPTIONS;
    itemsControl = new FormControl();
    notPreSelectedItemsControl = new FormControl();
    disabledPreSelectedItemsControl = new FormControl();

    // back-end pagination
    dropdownPaginationOptions: BackendPagination;
    private backendPaginationOptions = this.getBackendPaginationOptions();
    // back-end pagination
    paginationItemsControl = new FormControl();

    totalItems: number;
    itemsToDisable = MOCK_DUAL_OPTIONS_DISABLED;
    DisableAllItems = MOCK_DUAL_OPTIONS_DISABLE_All_ITEMS;
    disabledPreSelectedItems = MOCK_DUAL_OPTIONS_PRESET_DISABLED;
    dynamicItems = MOCK_DUAL_OPTIONS_DYNAMIC;
    totalItemBackendPagination = 44;
    applicationList: DropdownOption[] = MOK_APPLICATIONS.map(app => {
        return {
            id: app.id,
            name: app.name,
            displayText: app.name,
            icon: app.platform.toLowerCase(),
            image: app.icon,
            subText: app.subText
        };
    });
    constructor() {}

    ngOnInit(): void {
        this.totalItems = 40;
        this.itemsControl.setValue(MOCK_DUAL_OPTIONS_PRESET);
        this.disabledPreSelectedItemsControl.setValue(this.disabledPreSelectedItems);
        this.notPreSelectedItemsControl.setValue([]);
        this.placeholderData = {
            component: {
                type: DropdownCustomPlaceholderComponent as Type<Component>,
                data: {
                    text: 'Custom placeholder'
                }
            }
        };

        this.itemsControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => console.log('selected save: ', val));

        this.notPreSelectedItemsControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => console.log('selected save: ', val));

        this.setBackendPaginationOptions(null);
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    isReachTotalData() {
        console.log('Data reached limit');
    }

    isSearchChanged(data: string) {
        console.log('Search key: ', data);
    }

    isViewChanged(data: boolean) {
        console.log('Overlay Open: ', data);
    }

    onScrollDown() {
        console.log('Get More Data');
        this.getMoreDataFromBackend();
    }

    onSearchChanged(searchTerm: string) {
        searchTerm = searchTerm.trim();

        if (searchTerm.length > 2) {
            // do search
            this.setBackendPaginationOptions(searchTerm);
        } else if (searchTerm.length === 0) {
            // clear search
            this.setBackendPaginationOptions(null);
        }
    }

    /**
     * deprecated method
     * @private
     */
    private getMoreDataFromBackend() {
        const item = dynamicDisplayItemBackendPagination;

        if (this.dynamicItems.length < this.totalItemBackendPagination) {
            const addedItems = this.dynamicItems.reduce((acc: any[], _, index: number) => {
                let newItem = {...item};
                newItem = {
                    ...newItem,
                    id: index + this.dynamicItems.length + 1,
                    content: {
                        ...newItem.content,
                        component: {
                            ...newItem.content.component,
                            data: {
                                ...newItem.content.component.data,
                                text: `Custom item ${index + this.dynamicItems.length + 1}`
                            }
                        }
                    }
                };
                acc = [...acc, newItem];
                return acc;
            }, []);
            this.dynamicItems = [...this.dynamicItems, ...addedItems];
        }
    }

    // region new back-end pagination (same standard like in dropdown and multi-dropdown components)
    /**
     * Backend pagination
     * @param term
     * @private
     */
    private setBackendPaginationOptions(term: string): void {
        const getOptions = {
            searchTerm: term || null,
            pageNumber: 1,
            resultsBulkSize: 50
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
        const page = {
            startIndex: (pageNumber - 1) * resultsBulkSize,
            endIndex: (pageNumber - 1) * resultsBulkSize + resultsBulkSize
        };
        // emulate back-end request
        const allData = !!searchTerm
            ? MOCK_DUAL_OPTIOS_PAGINATION.filter(item => {
                  return item.email.includes(searchTerm);
              })
            : MOCK_DUAL_OPTIOS_PAGINATION;

        const mockData = allData.slice(page.startIndex, page.endIndex);
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
    // endregion
}
