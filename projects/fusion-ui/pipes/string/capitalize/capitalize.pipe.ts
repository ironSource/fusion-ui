import {Pipe, PipeTransform} from '@angular/core';
import {CapitalizeTransformOptions} from './capitalize-transform-options';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, {allWords, separator = ' ', combineWords, firstCharLower}: CapitalizeTransformOptions = {}): string {
        let newString: string;
        const newWordSeperator = combineWords ? '' : ' ';
        if (allWords) {
            newString = value
                .split(separator)
                .map(word => (word ? this._capitalizeWord(word) : word))
                .join(newWordSeperator);
        } else {
            newString = value ? this._capitalizeWord(value) : value;
        }

        if (firstCharLower) {
            newString = newString.charAt(0).toLowerCase() + newString.slice(1);
        }

        return newString;
    }

    private _capitalizeWord(word: string) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
}
