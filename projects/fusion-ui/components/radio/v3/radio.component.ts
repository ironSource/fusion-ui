import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {RadioBaseComponent} from '@ironsource/fusion-ui/components/radio/common/base';

@Component({
    selector: 'fusion-radio',
    templateUrl: '../common/base/radio.base.component.html',
    styleUrls: ['./radio.component.scss'],
    host: {'ui-version': '3'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})
export class RadioComponent extends RadioBaseComponent {}
