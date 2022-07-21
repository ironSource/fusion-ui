import {ChangeDetectionStrategy, Component, forwardRef, ViewEncapsulation} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {RadioGroupBaseComponent} from '@ironsource/fusion-ui/components/radio-group/common/base';

@Component({
    selector: 'fusion-radio-group',
    templateUrl: '../common/base/radio-group.base.component.html',
    styleUrls: ['./radio-group.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioGroupComponent),
            multi: true
        }
    ]
})
export class RadioGroupComponent extends RadioGroupBaseComponent {}
