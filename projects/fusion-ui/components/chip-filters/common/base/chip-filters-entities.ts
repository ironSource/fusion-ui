import {FormControl} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {DaterangeOptions} from '@ironsource/fusion-ui/components/daterange';

export type SelectedFilters = {
    id: number | string;
    isSelected?: boolean;
    value?: any;
};

export enum DynamicFilterType {
    Dropdown = 'dropdown',
    IncludeExclude = 'include-exclude',
    DateRange = 'date-range'
}

export interface DynamicFilter {
    id: number;
    title: string;
    filterType: DynamicFilterType;
    formControl?: FormControl;
    dropdownConfiguration?: {
        options: DropdownOption[];
        optionsTitle?: string;
        placeholder?: string;
        search?: boolean;
    };
    includeExcludeConfiguration?: {
        items: DropdownOption[];
        placeholder?: string;
    };
    daterangeConfiguration?: {
        options: DaterangeOptions;
        minDate?: Date;
        maxDate?: Date;
    };
}
