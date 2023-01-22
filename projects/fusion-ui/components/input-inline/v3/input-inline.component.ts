import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {InputInlineBaseComponent} from '@ironsource/fusion-ui/components/input-inline/common/base';
import {CommonModule} from '@angular/common';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule, InputOptions, InputSize} from '@ironsource/fusion-ui/components/input/v3';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ClickOutsideModule} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-input-inline',
    templateUrl: './input-inline.component.html',
    styleUrls: ['./input-inline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, LoaderModule, IconModule, InputModule, TooltipModule, ClickOutsideModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputInlineComponent),
            multi: true
        }
    ]
})
export class InputInlineComponent extends InputInlineBaseComponent implements OnInit {
    /** @internal */
    inputOptions: InputOptions = {size: InputSize.Small};
    /** @internal */
    saveIcon: IconData = {iconName: 'check-bold', iconVersion: 'v3'};

    ngOnInit() {
        super.ngOnInit();
    }
}
