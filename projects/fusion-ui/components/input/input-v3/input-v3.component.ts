import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputBase} from '@ironsource/fusion-ui/components/input/input-base/input-base';

@Component({
    selector: 'fusion-input-v3',
    templateUrl: './input-v3.component.html',
    styleUrls: ['./input.component-v3.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputV3Component), multi: true}]
})
export class InputV3Component extends InputBase {
    @ViewChild('input', {static: false}) input: ElementRef;
}
