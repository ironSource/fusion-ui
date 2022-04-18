import {Component, OnInit, ChangeDetectionStrategy, forwardRef, OnDestroy, AfterViewInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CONFIG_INPUT_BY_UI_STYLE, InputBaseComponent} from '@ironsource/fusion-ui/components/input/common/base';
import {isNullOrUndefined} from '@ironsource/fusion-ui';
import {of} from 'rxjs';

@Component({
    selector: 'fusion-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true}]
})
export class InputComponent extends InputBaseComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {
    showErrorIcon(): boolean {
        return !isNullOrUndefined(this.config.error);
    }

    protected getConfigStyleObservable() {
        return of(CONFIG_INPUT_BY_UI_STYLE['style_v2']);
    }
}
