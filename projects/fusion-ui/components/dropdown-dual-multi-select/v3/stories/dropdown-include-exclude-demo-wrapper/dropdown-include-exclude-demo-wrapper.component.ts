import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {delay, map, takeUntil} from 'rxjs/operators';
import {BackendPagination} from '@ironsource/fusion-ui/components/dropdown';
import {Observable, of, Subject} from 'rxjs';

@Component({
    selector: 'fusion-dropdown-include-exclude-demo-wrapper',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownDualMultiSelectModule],
    template: `<fusion-dropdown-dual-multi-select
        [title]="title"
        [placeholder]="placeholder"
        [selectedItemName]="selectedItemName"
        [formControl]="formControl"
        [pendingItems]="pendingItems"
        [backendPagination]="dropdownPaginationOptions"
        (searchChange)="onSearchChanged($event)"
    ></fusion-dropdown-dual-multi-select> `
})
export class DropdownIncludeExcludeDemoWrapperComponent implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();

    title = 'Pagination Example';
    placeholder = 'Select items';
    selectedItemName = {singular: 'Item', plural: 'Items'};
    pendingItems = false; // main component loader. set it true

    formControl = new FormControl<DropdownOption[]>([]); // regular

    dropdownPaginationOptions: BackendPagination;
    private backendPaginationOptions = this.getBackendPaginationOptions();

    constructor(public apiService: ApiService) {}

    ngOnInit(): void {
        this.setBackendPaginationOptions(null);

        this.formControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(data => {
            console.log('valueChanges: ', data);
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onSearchChanged(searchTerm: string) {
        this.setBackendPaginationOptions(searchTerm.length === 0 ? null : searchTerm);
    }

    private setBackendPaginationOptions(term: string): void {
        const getOptions = {
            searchTerm: term || null,
            pageNumber: 1,
            resultsBulkSize: 50
        };
        const backendGetFunction = this.getPaginationData.bind(this);

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

        console.log('getPaginationData >>>', page, searchTerm);

        // back-end request example
        return this.apiService
            .get('https://jsonplaceholder.typicode.com/photos') // in real request add searchTerm
            .pipe(
                takeUntil(this.onDestroy$),
                delay(2000),
                map((data: any[]) => {
                    const pageData = data.slice(page.startIndex, page.endIndex);
                    return {items: pageData, totals: data.length};
                })
            );
    }

    private getBackendPaginationOptions() {
        return {
            responseDataPropertyName: 'items',
            responseTotalCountPropertyName: 'totals',
            mappingFunction: item => ({
                id: item.id,
                displayText: item.id + ' : ' + item.title,
                image: item.thumbnailUrl
            }),
            sortingFunction: (a, b) => a.id - b.id
        };
    }
}
