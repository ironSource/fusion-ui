import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
@Pipe({
    name: 'generic',
    standalone: true
})
export class GenericPipe implements PipeTransform {
    transform(fn: (...args: any[]) => any, ...args: any[]) {
        return fn(...args);
    }
}
