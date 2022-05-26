import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DropdownOptionsListBaseComponent} from '@ironsource/fusion-ui/components/dropdown-options-list/common/base';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {isNull} from '@ironsource/fusion-ui';

const CLOSE_ACTION_SELECTOR = '.fu-option-action-icon';

@Component({
    selector: 'fusion-dropdown-options-list',
    templateUrl: '../common/base/dropdown-options-list.base.component.html',
    styleUrls: ['./dropdown-options-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownOptionsListComponent extends DropdownOptionsListBaseComponent {
    @Output() closeIconClicked = new EventEmitter();

    onChangeSelected(option: DropdownOption, $event: Event) {
        if (!isNull(($event.target as HTMLElement).closest(CLOSE_ACTION_SELECTOR))) {
            this.closeIconClicked.emit(option);
        } else {
            this.changeSelected.emit({option, $event});
        }
    }
}
