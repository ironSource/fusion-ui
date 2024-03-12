import {ChangeDetectionStrategy, Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonColor, ButtonComponent, ButtonVariant, IconButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {AlertComponent, AlertV4Configuration} from '@ironsource/fusion-ui/components/alert/v4';
import {ModalV4Size} from './modal-v4.entities';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {InputTestIdModifiers, DialogTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services/test-ids';

@Component({
    selector: 'fusion-modal',
    standalone: true,
    imports: [CommonModule, IconButtonComponent, ButtonComponent, AlertComponent, GenericPipe],
    host: {class: 'fusion-v4'},
    templateUrl: './modal-v4.component.html',
    styleUrls: ['./modal-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalV4Component implements OnInit {
    @Input() title!: string;
    @Input() description: string;
    @Input() showHeader: boolean = true;
    @Input() showCloseButton: boolean = true;
    @Input() size: ModalV4Size = 'small';

    @Input() content: string;
    @Input() alert: AlertV4Configuration | undefined = undefined;

    @Input() primaryButtonLabel: string = 'OK';
    @Input() primaryButtonColor: ButtonColor = 'primary';
    @Input() primaryButtonVariant: ButtonVariant = 'contained';
    @Input() primaryButtonLoading: boolean = false;
    @Input() primaryButtonDisabled: boolean = false;

    @Input() secondaryButtonLabel: string = 'Cancel';
    @Input() secondaryButtonColor: ButtonColor = 'default';
    @Input() secondaryButtonVariant: ButtonVariant = 'outlined';
    @Input() secondaryButtonDisabled: boolean = false;

    @Output() closeButtonClicked = new EventEmitter<void>();
    @Output() secondaryButtonClicked = new EventEmitter<void>();
    @Output() primaryButtonClicked = new EventEmitter<void>();
    @Input() testId!: string;
    testIdInputModifiers: typeof InputTestIdModifiers = InputTestIdModifiers;
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    constructor(private injector: Injector) {}

    ngOnInit(): void {}

    onAlertActionClicked() {
        this.alert.action?.onClick();
    }

    onCloseButtonClicked($event) {
        this.closeButtonClicked.emit();
    }

    onSecondaryButtonClicked($event) {
        this.secondaryButtonClicked.emit();
    }

    onPrimaryButtonClicked($event) {
        this.primaryButtonClicked.emit();
    }

    protected readonly DialogTestIdModifiers = DialogTestIdModifiers;
}
