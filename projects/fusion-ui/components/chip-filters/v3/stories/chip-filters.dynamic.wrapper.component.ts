import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MOCK_USERS} from './chip-filters.stories.mock';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {ChipFiltersModule} from '@ironsource/fusion-ui/components/chip-filters';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {ChipFilterComponentConfigurations} from '@ironsource/fusion-ui/components/chip-filter/common/base';

@Component({
    selector: 'fusion-chip-filters-wrapper',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChipFilterModule,
        ChipFiltersModule,
        DropdownDualMultiSelectModule,
        DropdownModule
    ],
    template: ` <fusion-chip-filters
        [addFiltersTitle]="addFiltersTitle"
        [addFilterOptions]="addFilterOptions"
        (onDynamicChipSelect)="onDynamicChipSelect($event)"
    >
        <fusion-chip-filter [configuration]="configChip1">
            <div class="filter-element">
                <fusion-dropdown
                    [placeholderPrefix]="placeholderPrefixChip1"
                    [placeholder]="placeholderChip1"
                    [formControl]="fcChip1"
                    [options]="optionsChip1"
                    [search]="searchChip1"
                    [optionsTitle]="optionsTitleChip1"
                >
                </fusion-dropdown>
            </div>
        </fusion-chip-filter>

        <ng-container *ngFor="let chip of selectedDynamicFilters">
            <fusion-chip-filter [configuration]="chip.configChip" (onChipRemove)="onDynamicChipRemove($event)">
                <div class="filter-element">
                    <fusion-dropdown-dual-multi-select
                        [title]="chip.optionsTitleChip"
                        [placeholder]="chip.placeholderChip"
                        [formControl]="chip.fcChip"
                        [items]="chip.optionsChip"
                    ></fusion-dropdown-dual-multi-select>
                </div>
            </fusion-chip-filter>
        </ng-container>
    </fusion-chip-filters>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipFiltersDynamicWrapperComponent {
    @Input() set dynamicFilters(value: any[]) {
        this.dynamicFiltersAll = value;
        // add pre-selected dynamic filters
        this.selectedDynamicFilters = this.dynamicFiltersAll.filter(item => {
            return !!item.fcChip.value;
        });
        // set dynamic filters options
        this.addFilterOptions = this.dynamicFiltersAll.map(filterDynamic => ({
            id: filterDynamic.configChip.id,
            displayText: filterDynamic.optionsTitleChip
        }));
    }

    addFiltersTitle = 'Add filter by:';
    addFilterOptions: DropdownOption[] = [];

    fcChip1 = new FormControl();
    configChip1: ChipFilterComponentConfigurations = {id: 1, mode: 'static', close: true};
    optionsChip1 = MOCK_USERS;
    placeholderPrefixChip1 = 'User';
    placeholderChip1 = 'All';
    searchChip1 = true;
    optionsTitleChip1 = 'User';

    selectedDynamicFilters = [];

    private dynamicFiltersAll = [];

    onDynamicChipSelect(selected) {
        if (!this.selectedDynamicFilters.some(item => selected.id === item.configChip.id)) {
            const index = this.dynamicFiltersAll.findIndex(item => item.configChip.id === selected.id);
            this.selectedDynamicFilters = [...this.selectedDynamicFilters, ...[this.dynamicFiltersAll[index]]];
        }
    }

    onDynamicChipRemove(chipIdToRemove) {
        this.selectedDynamicFilters = [...this.selectedDynamicFilters.filter(chip => chip.configChip.id !== chipIdToRemove)];
    }
}
