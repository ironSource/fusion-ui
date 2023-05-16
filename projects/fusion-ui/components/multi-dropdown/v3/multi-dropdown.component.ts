import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {MultiDropdownBaseComponent} from '@ironsource/fusion-ui/components/multi-dropdown/common/base';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
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
    /** @ignore */
    dropdownArrowIconName = {
        iconName: 'angle-down',
        iconVersion: 'v3'
    };
    /** @ignore */
    getOptionContent(option: DropdownOption): string {
        return this.dropdownService.optionToString(this.selected[0], this.mappingOptions, {dropdownType: 'multi'});
    }
}
