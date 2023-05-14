import {Injectable} from '@angular/core';
import {kebabCase} from '@ironsource/fusion-ui/utils';

@Injectable()
export class AttributionService {
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = kebabCase(value);
    }
    private _name = '';
}
