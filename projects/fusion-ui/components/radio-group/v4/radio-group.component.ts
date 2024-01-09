import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {RadioGroupBaseComponent} from './radio-group.base.component';
import {RadioComponent} from '@ironsource/fusion-ui/components/radio/v4';

@Component({
    selector: 'fusion-radio-group',
    standalone: true,
    imports: [CommonModule, RadioComponent],
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'fusion-v4'},
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioGroupComponent),
            multi: true
        }
    ]
})
export class RadioGroupComponent extends RadioGroupBaseComponent {}
