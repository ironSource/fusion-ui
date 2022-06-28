import {Component, OnInit, ChangeDetectionStrategy, forwardRef, OnDestroy, AfterViewInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {InputBaseComponent} from '@ironsource/fusion-ui/components/input/common/base';
import {of} from 'rxjs';
import {CONFIG_INPUT_BY_UI_STYLE} from '@ironsource/fusion-ui/components/input/common/base';
import {isBoolean} from '@ironsource/fusion-ui/utils';

@Component({
    selector: 'fusion-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true}]
})
export class InputComponent extends InputBaseComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {
    showErrorIcon(): boolean {
        return this.config.options.size === 'small' && this.config.error && !isBoolean(this.config.error);
    }

    protected getConfigStyleObservable() {
        return of(CONFIG_INPUT_BY_UI_STYLE['style_v1']);
    }
}
