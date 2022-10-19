import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
@Pipe({
    name: 'filterByField',
    standalone: true
})
export class FilterByFieldPipe implements PipeTransform {
    /**
     *
     * @param collection - array of objects
     * @param fields - fields to filter by
     * @param str - filter value
     */
    transform(collection: Array<any>, fields: Array<string>, str: string, options: any) {
        if (str && str.length !== 0) {
            return collection.reduce((filterdCollection, obj, idx, initialCollection) => {
                let isExists = false;
                if (obj[options.ignoreKey]) {
                    isExists = true;
                } else {
                    fields.forEach(field => {
                        if (obj[field]) {
                            let value;
                            if (options.caseSensitive) {
                                value = obj[field].toString().includes(str);
                            } else {
                                value = obj[field].toString().toLowerCase().includes(str.toLowerCase());
                            }
                            isExists = isExists || value;
                        }
                    });
                }

                if (isExists) {
                    filterdCollection.push(obj);
                }

                return filterdCollection;
            }, []);
        } else {
            return collection;
        }
    }
}
