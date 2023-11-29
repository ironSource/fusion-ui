import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ListBoxBaseComponent} from '@ironsource/fusion-ui/components/list-box/common/base';

@Component({
    selector: 'fusion-list-box',
    templateUrl: '../common/base/list-box.base.component.html',
    styleUrls: ['./list-box.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListBoxComponent),
            multi: true
        }
    ]
})
export class ListBoxComponent extends ListBoxBaseComponent implements OnInit {
    ngOnInit() {
        super.ngOnInit();
        this.checkIconName = {iconName: 'check', iconVersion: 'v2'};
        this.removeIconName = {iconName: 'close-circle', iconVersion: 'v2'};
    }
}
