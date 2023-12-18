import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {CheckboxBaseComponent} from './checkbox.base.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'fusion-checkbox',
    standalone: true,
    imports: [CommonModule, FlagModule, IconModule, TooltipModule],
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'fusion-v4'},
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ]
})
export class CheckboxComponent extends CheckboxBaseComponent {}
