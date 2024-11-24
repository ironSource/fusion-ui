import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ListBoxBaseComponent} from '@ironsource/fusion-ui/components/list-box/common/base';

@Component({
    selector: 'fusion-list-box',
    templateUrl: '../common/base/list-box.base.component.html',
    styleUrls: ['./list-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListBoxComponent),
            multi: true
        }
    ],
    standalone: false
})
export class ListBoxComponent extends ListBoxBaseComponent implements OnInit {
    ngOnInit() {
        super.ngOnInit();
        this.checkIconName = {iconName: 'check-v-2', iconVersion: 'v2'};
        this.removeIconName = {iconName: 'clear-full-circle', iconVersion: 'v1'};
    }
}
