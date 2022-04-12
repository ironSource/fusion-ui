import {InputBase} from '@ironsource/fusion-ui/components/input/input-base/input-base';
import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'fusion-input-v1',
    templateUrl: './input-v1.component.html',
    styleUrls: ['./input.component-v1.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputV1Component), multi: true}]
})
export class InputV1Component extends InputBase {
    @ViewChild('input', {static: false}) input: ElementRef;
    @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
}
