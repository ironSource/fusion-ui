import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-floating-toolbar',
    standalone: true,
    imports: [CommonModule, IconModule],
    templateUrl: './floating-toolbar.component.html',
    styleUrls: ['./floating-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingToolbarComponent {
    @Input() counter: number;
    @Input() label: string;
    @Input() shown: boolean;

    @Output() closeButtonClicked = new EventEmitter<boolean>();

    @HostBinding('class.fu-open') get isOpen(): boolean {
        return this.shown;
    }

    closeIcon: IconData = {iconName: 'close', iconVersion: 'v3'};

    onCloseClicked() {
        this.closeButtonClicked.emit(this.shown);
    }
}
