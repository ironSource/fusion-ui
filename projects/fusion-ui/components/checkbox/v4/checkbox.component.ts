import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxBaseComponent} from './checkbox.base.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'fusion-checkbox',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    imports: [CommonModule, TooltipModule],
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
