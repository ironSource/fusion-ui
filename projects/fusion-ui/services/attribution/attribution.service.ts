import {Injectable} from '@angular/core';
import {kebabCase} from '@ironsource/fusion-ui/utils';

@Injectable()
export class AttributionService {
    prefix: string = '';
    set name(value: string) {
        this._name = kebabCase(value);
    }
    get name(): string {
        return this._name;
    }
    private _name = '';
}
