import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UniqueIdService {
    constructor() {}

    getUniqueId(): number {
        const randomNumber = Math.random();
        const date = new Date();
        return Math.floor(date.getTime() * randomNumber * 10000);
    }
}
