import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, HostBinding, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AlertColor, AlertIconColorsMap, AlertIconMap, AlertVariant} from './alert-v4.entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonColor, ButtonComponent, IconButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {AlertTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-alert',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    imports: [CommonModule, IconModule, ButtonComponent, IconButtonComponent, GenericPipe],
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

    @Input() testId: string;
    /** @internal */
    testIdAlertModifiers: typeof AlertTestIdModifiers = AlertTestIdModifiers;
    /** @internal */
    testIdsService: TestIdsService = inject(TestIdsService);

    @HostBinding('attr.data-testid') get testAttribute(): string {
        return this.testId;
    }

    get color() {
        return this._color;
    }

    get alertContent() {
        const htmlRegex = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/i;
        return !!this.description && htmlRegex.test(this.description)
            ? this.sanitizer.bypassSecurityTrustHtml(this.description)
            : this.description;
    }

    @Input() variant: AlertVariant = 'standard';
    @Input() dismissible: boolean = false;
    @Input() actionText: string = '';
    @Input() rounded: boolean = true;
    // ts-ignore
    @Output() close = new EventEmitter<void>();
    @Output() action = new EventEmitter<void>();

    /** @internal */
    iconName: string = '';
    /** @internal */
    iconColor: string = '';
    /** @internal */
    actionButtonColor: ButtonColor = 'default';

    private _color: AlertColor = 'success';

    private sanitizer = inject(DomSanitizer);

    /** @internal */
    onDismissClicked() {
        this.close.emit();
    }

    /** @internal */
    onActionClicked() {
        this.action.emit();
    }

    protected readonly alertTestIdModifiers = AlertTestIdModifiers;
}
