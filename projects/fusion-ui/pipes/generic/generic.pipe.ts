import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'generic'
})
export class GenericPipe implements PipeTransform {
    transform(fn: (...args: any[]) => any, ...args: any[]) {
        return fn(...args);
    }
}
