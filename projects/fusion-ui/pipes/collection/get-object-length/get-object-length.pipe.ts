import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
@Pipe({
    name: 'objectLengthWhereValueTrue',
    standalone: true
})
export class GetObjectLengthPipe implements PipeTransform {
    /**
     * get object length where the value is true
     * @param itemsMap
     */
    transform(itemsMap: {[key: number]: boolean}) {
        return Object.keys(itemsMap).filter(item => !!itemsMap[item]).length;
    }
}
