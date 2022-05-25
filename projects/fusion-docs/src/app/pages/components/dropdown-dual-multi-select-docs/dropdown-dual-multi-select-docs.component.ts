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
    MOCK_DUAL_OPTIONS_PRESET_DISABLED
} from './dropdown-dual-multi-select-config';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MOK_APPLICATIONS} from '../dropdown-docs-v2/dropdown-docs-v2.config';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-docs',
    templateUrl: './dropdown-dual-multi-select-docs.component.html',
    styleUrls: ['./dropdown-dual-multi-select-docs.component.scss']
})
export class DropdownDualMultiSelectDocsComponent implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();

    placeholderData: DynamicComponentConfiguration;
    items = MOCK_DUAL_OPTIONS;
    itemsControl = new FormControl();
    notPreSelectedItemsControl = new FormControl();
    disabledPreSelectedItemsControl = new FormControl();
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
            image: app.icon
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
}
