import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {CONFIG_INPUT_INLINE_BY_UI_STYLE, InputInlineBaseComponent} from '@ironsource/fusion-ui/components/input-inline/common/base';
import {CommonModule} from '@angular/common';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v3';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';

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
    ngOnInit() {
        super.ngOnInit();
        this.configByStyle = CONFIG_INPUT_INLINE_BY_UI_STYLE[`style_v3`];
    }
}
