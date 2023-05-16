import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {MultiDropdownBaseComponent} from '@ironsource/fusion-ui/components/multi-dropdown/common/base';
import {AttributionService} from '@ironsource/fusion-ui/services/attribution';

@Component({
    selector: 'fusion-multi-dropdown',
    templateUrl: './multi-dropdown.component.html',
    styleUrls: ['./multi-dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DropdownService,
        AttributionService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiDropdownComponent),
            multi: true
        }
    ]
})
export class MultiDropdownComponent extends MultiDropdownBaseComponent {
    dropdownArrowIconName = {
        iconName: 'arrow-down',
        iconVersion: 'v2'
    };
}
