import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {IconSelectListBaseComponent} from '@ironsource/fusion-ui/components/icon-select-list/common/base';

@Component({
    selector: 'fusion-icon-select-list',
    templateUrl: '../common/base/icon-select-list.base.component.html',
    styleUrls: ['./icon-select-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => IconSelectListComponent),
            multi: true
        }
    ],
    standalone: false
})
export class IconSelectListComponent extends IconSelectListBaseComponent {}
