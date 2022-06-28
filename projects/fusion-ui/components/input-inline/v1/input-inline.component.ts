import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CONFIG_INPUT_INLINE_BY_UI_STYLE, InputInlineBaseComponent} from '@ironsource/fusion-ui/components/input-inline/common/base';

@Component({
    selector: 'fusion-input-inline',
    templateUrl: '../common/base/input-inline.base.component.html',
    styleUrls: ['./input-inline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputInlineComponent),
            multi: true
        }
    ]
})
export class InputInlineComponent extends InputInlineBaseComponent {
    ngOnInit() {
        super.ngOnInit();
        this.configByStyle = CONFIG_INPUT_INLINE_BY_UI_STYLE[`style_v1`];
    }
}
