export interface MonthPicker {
    year: number;
    month: number;
}

export interface MonthPickerPlaceholder {
    text: string;
    prefix?: string;
    format?: string;
}

export interface MonthPickerConfiguration {
    max?: MonthPicker;
    min?: MonthPicker;
    placeholder?: MonthPickerPlaceholder | string;
}
