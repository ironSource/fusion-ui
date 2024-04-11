import {FormControl} from '@angular/forms';

export interface ChartLabel {
    id?: number | string;
    label: string;
    labelLetter?: string; // used as letter in label bullet
    labelSuffix?: string;
    labelVisible?: FormControl;
    color?: string;
    backgroundColor?: string;
    labelLetterColor?: string; // custom color for label letter
    icon?: string;
    flag?: string;
    tooltip?: string;
}
