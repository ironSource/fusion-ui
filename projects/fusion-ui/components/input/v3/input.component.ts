import {Component, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CONFIG_INPUT_BY_UI_STYLE, InputBaseComponent} from '@ironsource/fusion-ui/components/input/common/base';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {of} from 'rxjs';

@Component({
    selector: 'fusion-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true}]
})
export class InputComponent extends InputBaseComponent {
    showErrorIcon(): boolean {
        return !isNullOrUndefined(this.config.error);
    }

    protected getConfigStyleObservable() {
        return of(CONFIG_INPUT_BY_UI_STYLE['style_v3']);
    }
}
