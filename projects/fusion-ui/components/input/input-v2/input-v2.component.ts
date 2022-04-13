import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, ViewChild} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputBase} from '@ironsource/fusion-ui/components/input/input-base/input-base';

@Component({
    selector: '[fusion-input-v2]',
    templateUrl: './input-v2.component.html',
    styleUrls: ['./input.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputV2Component), multi: true}]
})
export class InputV2Component extends InputBase {
    @ViewChild('input', {static: false}) input: ElementRef;
    @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
}
