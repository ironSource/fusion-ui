import {ChangeDetectionStrategy, Component, ElementRef, forwardRef, ViewChild} from '@angular/core';
import {DropdownSearchBaseComponent} from '@ironsource/fusion-ui/components/dropdown-search/common/base';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';

@Component({
    selector: 'fusion-dropdown-search',
    templateUrl: './dropdown-search.component.html',
    styleUrls: ['./dropdown-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownSearchComponent),
            multi: true
        }
    ]
})
export class DropdownSearchComponent extends DropdownSearchBaseComponent {
    @ViewChild('input') input?: ElementRef;
    searchIcon?: IconData = {iconName: 'search-bold', iconVersion: 'v3'};
    searchClearIcon?: IconData = {iconName: 'cancel', iconVersion: 'v3'};

    clearSearch?() {
        this.searchValue.setValue('');
        this.input.nativeElement.focus();
    }
}
