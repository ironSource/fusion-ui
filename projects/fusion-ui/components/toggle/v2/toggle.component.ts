import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ToggleBaseComponent} from '@ironsource/fusion-ui/components/toggle/common/base';

@Component({
    selector: 'fusion-toggle',
    templateUrl: '../common/base/toggle.base.component.html',
    styleUrls: ['./toggle.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleComponent),
            multi: true
        }
    ]
})
export class ToggleComponent extends ToggleBaseComponent {}
