import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Injectable({
    providedIn: 'root'
})
@Pipe({
    name: 'shortNumberScaleSuffix',
    standalone: true
})
/**
 * Convert number 'BIG' number to string with "weight" suffix K-kilo, M-mega, etc.
 * for example 500000 to 500 K
 */
export class ShortNumberScaleSuffixPipe implements PipeTransform {
    transform(value: number, options?: {noSeparateBySpace?: boolean; precision?: number; intBase?: number}): string {
        if (value < options?.intBase || 1) {
            return value.toFixed(2);
        }

        const i = value === 0 ? 0 : Math.floor(Math.log(value) / Math.log(1000));
        const bigPart = value / Math.pow(1000, i);
        const noSpaceDelimiter = !isNullOrUndefined(options) && !!options.noSeparateBySpace;
        const precision: number = options?.precision;
        let numberToShow = bigPart.toFixed(Number.isInteger(bigPart) ? 0 : 1);

        if (precision) {
            numberToShow = bigPart.toPrecision(precision);
        }

        return `${numberToShow}${noSpaceDelimiter ? '' : ' '}${['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'][i] ?? ''}`.trim();
    }
}
