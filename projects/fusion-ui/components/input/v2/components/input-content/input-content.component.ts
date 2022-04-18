import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {InputConfigByStyle, InputConfiguration} from '@ironsource/fusion-ui/components/input/common/base';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'fusion-input-content',
    templateUrl: './input-content.component.html',
    styleUrls: ['./input-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputContentComponent {
    @Input() config: InputConfiguration;
    @Input() configByStyle: InputConfigByStyle;
    @Input() loading: boolean;
    @Input() displaySearchIcon: boolean;
    @Input() focused: boolean;
    @Input() inputControl: FormControl;
    @Input() file: FormControl;
    @Input() isSmall: boolean;
    @Input() disabled: boolean;
    @Input() showErrorClass: boolean;
    @Input() type: string;
    @Input() step: string;
    @Input() showErrorIcon: boolean;
    @Input() toolTipMessage: string;
    @Input() errorIconName: string;
    @Input() inputEl: any;

    @Output() onClearInput = new EventEmitter<boolean>();
    @Output() buttonClicked = new EventEmitter();
    @Output() focus = new EventEmitter<void>();
    @Output() blur = new EventEmitter<void>();
    @Output() onTogglePassword = new EventEmitter();
    @Output() passToggleMouseDown = new EventEmitter();

    onBlur(): void {
        this.blur.emit();
    }

    onFocus(): void {
        this.focus.emit();
    }

    onButtonClicked($event: Event): void {
        this.buttonClicked.emit($event);
    }

    onPassToggleMouseDown($event: Event): void {
        this.passToggleMouseDown.emit($event);
    }

    clearInput(isFocused = false): void {
        this.onClearInput.emit(isFocused);
    }

    togglePassword($event: Event): void {
        this.onTogglePassword.emit($event);
    }
}
