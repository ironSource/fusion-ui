import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {SwitcherBaseComponent} from '@ironsource/fusion-ui/components/switcher/common/base';

@Component({
    selector: 'fusion-switcher',
    templateUrl: '../common/base/switcher.base.component.html',
    styleUrls: ['./switcher.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SwitcherComponent),
            multi: true
        }
    ]
})
export class SwitcherComponent extends SwitcherBaseComponent implements OnInit {}
