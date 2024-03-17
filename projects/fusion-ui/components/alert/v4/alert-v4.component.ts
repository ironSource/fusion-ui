import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertColor, AlertIconColorsMap, AlertIconMap, AlertVariant} from './alert-v4.entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonColor, ButtonComponent, IconButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Component({
    selector: 'fusion-alert',
    standalone: true,
    imports: [CommonModule, IconModule, ButtonComponent, IconButtonComponent],
    host: {class: 'fusion-v4'},
    templateUrl: './alert-v4.component.html',
    styleUrls: ['./alert-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertV4Component {
    @Input() title: string = '';
    @Input() description!: string;
    @Input() set color(value: AlertColor) {
        if (!isNullOrUndefined(value)) this._color = value;
        this.iconName = AlertIconMap[this._color];
        this.iconColor = AlertIconColorsMap[this._color];
        this.actionButtonColor = this._color;
    }
    get color() {
        return this._color;
    }
    @Input() variant: AlertVariant = 'standard';
    @Input() dismissible: boolean = false;
    @Input() actionText: string = '';
    @Input() rounded: boolean = true;

    @Output() close = new EventEmitter<void>();
    @Output() action = new EventEmitter<void>();

    /** @internal */
    iconName: string = '';
    /** @internal */
    iconColor: string = '';
    /** @internal */
    actionButtonColor: ButtonColor = 'default';

    private _color: AlertColor = 'success';

    /** @internal */
    onDismissClicked() {
        this.close.emit();
    }
    /** @internal */
    onActionClicked() {
        this.action.emit();
    }
}
