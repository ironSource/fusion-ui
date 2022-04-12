import {Component, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputBase} from './input-base/input-base';

// Todo - check if someone use error as boolean and if not change type to string only
@Component({
    selector: 'fusion-input',
    templateUrl: './input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true}]
})
export class InputComponent extends InputBase {}
