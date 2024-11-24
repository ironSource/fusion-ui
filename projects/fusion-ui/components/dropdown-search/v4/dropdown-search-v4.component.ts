import {ChangeDetectionStrategy, Component, forwardRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from '@ironsource/fusion-ui/components/search/v4';
import {DropdownSearchBaseComponent} from '@ironsource/fusion-ui/components/dropdown-search/common/base';

@Component({
    selector: 'fusion-dropdown-search',
    imports: [CommonModule, ReactiveFormsModule, SearchComponent],
    host: {class: 'fusion-v4'},
    templateUrl: './dropdown-search-v4.component.html',
    styleUrls: ['./dropdown-search-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownSearchV4Component),
            multi: true
        }
    ]
})
export class DropdownSearchV4Component extends DropdownSearchBaseComponent {
    @Input() testId!: string;
}
