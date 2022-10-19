import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
@Pipe({
    name: 'clone',
    standalone: true
})
export class ClonePipe implements PipeTransform {
    transform(value: any) {
        return this.clone(value);
    }

    clone(value: any): any {
        let temp;
        if (value === null || typeof value !== 'object' || 'isActiveClone' in value) {
            return value;
        }
        if (value instanceof Date) {
            temp = new Date(value);
        } else {
            temp = value.constructor();
        }
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                value.isActiveClone = null;
                temp[key] = this.clone(value[key]);
                delete value.isActiveClone;
            }
        }
        return temp;
    }
}
