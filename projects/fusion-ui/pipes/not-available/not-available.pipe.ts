import {Pipe, PipeTransform} from '@angular/core';
import {isNull} from '@ironsource/fusion-ui/utils';

@Pipe({
    name: 'notAvailable'
})
export class NotAvailablePipe implements PipeTransform {
    transform(value: any, expectedValue?: string): any {
        if (isNull(value)) {
            return expectedValue || 'N/A';
        }
        return value;
    }
}
